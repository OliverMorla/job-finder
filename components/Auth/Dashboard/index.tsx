import { View, Text, TouchableOpacity, Image } from "react-native";
import { Link, router } from "expo-router";
import { useAuth } from "../../../providers/auth-provider";
import icons from "../../../constants/icons";
import { deleteAccount } from "../../../lib/actions/user-actions";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const AuthDashboard = () => {
  const { signOut, session } = useAuth();
  const [userImage, setUserImage] = useState<any>(null);

  const [status, requestPermission] = ImagePicker.useCameraPermissions();

  const pickImage = async () => {
    await requestPermission();

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setUserImage(result.assets[0].uri);
    }

    console.log(result);
  };

  return (
    <View className="items-center justify-center h-full">
      <View className="items-center">
        <Image
          // source={icons.user}
          source={{ uri: userImage }}
          style={{
            borderColor: "gray",
            width: 75,
            height: 75,
            borderWidth: 0.5,
            borderRadius: 100,
          }}
        />
        {session?.user.avatar === null ? (
          <TouchableOpacity onPress={pickImage}>
            <Text> Tap to add an avatar </Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <View className="mt-4">
        <View className="flex-row">
          <Text className="mr-1 font-bold">Display Name:</Text>
          <Text>{session?.user.displayName}</Text>
        </View>
        <View className="flex-row">
          <Text className="mr-1 font-bold">Email:</Text>
          <Text>{session?.user.email}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          className="bg-amber-500 items-center justify-center w-36 p-4 rounded-lg mt-4 flex-row"
          onPress={() => signOut()}
        >
          <Image
            source={icons.signOut}
            style={{
              width: 25,
              height: 25,
            }}
          />
          <Text className="font-bold text-white ml-4">Log Out</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-lime-500 items-center justify-center w-36 p-4 rounded-lg mt-4 flex-row"
          onPress={() => router.push("/root/user/modal")}
        >
          <Image
            source={icons.mail}
            style={{
              width: 25,
              height: 25,
            }}
          />
          <Text className="font-bold text-white ml-4">Upload Resume</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-red-500 items-center justify-center w-36 p-4 rounded-lg mt-4 flex-row"
          onPress={() => deleteAccount("")}
        >
          <Image
            source={icons.close}
            style={{
              width: 25,
              height: 25,
            }}
          />
          <Text className="font-bold text-white ml-4">Delete Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthDashboard;
