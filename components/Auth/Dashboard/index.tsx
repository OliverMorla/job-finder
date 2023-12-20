import { View, Text, TouchableOpacity, Image } from "react-native";
import { useAuth } from "../../../providers/auth-provider";
import icons from "../../../constants/icons";

const AuthDashboard = () => {
  const { signOut, session } = useAuth();
  return (
    <View className="items-center justify-center h-full">
      <View>
        <Image
          source={icons.user}
          className="border-slate-200 border-[1px] rounded-full"
        />
        {session?.user.avatar === null ? (
          <Text> Tap to add an avatar </Text>
        ) : null}
      </View>
      <View className="mt-4">
        <Text>{session?.user.displayName}</Text>
        <Text>{session?.user.email}</Text>
      </View>
      <View>
        <TouchableOpacity
          className="bg-red-500 items-center justify-center w-36 p-4 rounded-lg mt-4"
          onPress={() => signOut()}
        >
          <Text className="font-bold text-white">Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthDashboard;
