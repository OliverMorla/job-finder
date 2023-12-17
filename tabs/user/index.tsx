import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../../providers/auth-provider";
const UserTab = () => {
  const { session, signOut } = useAuth();

  console.log(signOut())

  const router = useRouter();

  return (
    <View>
      {session ? (
        session?.user?.displayName
      ) : (
        <TouchableOpacity onPress={() => router.push("/auth/sign-in/")}>
          <Text>Tap here to login!</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UserTab;
