import { View, Text, TouchableOpacity, Image } from "react-native";
import { Link, useRouter } from "expo-router";

import { useAuth } from "../../../providers/auth-provider";
import { styles } from "../../../styles";
import AuthDashboard from "../../../components/Auth/Dashboard";
import icons from "../../../constants/icons";

const UserScreen = () => {
  const { session } = useAuth();

  const router = useRouter();
  return (
    <View style={styles.containerWithHeightBg}>
      {session ? (
        <AuthDashboard />
      ) : (
        <View style={styles.containerCenterWithHeight}>
          <TouchableOpacity
            className="p-4 items-center rounded-lg"
            onPress={() => router.push("/auth/sign-in/")}
            style={{
              borderColor: "black",
              borderWidth: 0.2,
            }}
          >
            <Image
              source={icons.signIn}
              style={{
                width: 50,
                height: 50,
              }}
            />

            <View className="items-center">
              <Text className="font-bold">Sign In</Text>
              <Text className="opacity-40">
                Tap here to login and get started
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            className="p-4 items-center rounded-lg mt-4"
            onPress={() => router.push("/auth/sign-up/")}
            style={{
              borderColor: "black",
              borderWidth: 0.2,
            }}
          >
            <Image
              source={icons.add}
              style={{
                width: 50,
                height: 50,
              }}
            />
            <View className="items-center">
              <Text className="font-bold">Sign Up</Text>
              <Text className="opacity-40">Tap here to create an account</Text>
            </View>
          </TouchableOpacity>

        </View>
      )}
    </View>
  );
};

export default UserScreen;
