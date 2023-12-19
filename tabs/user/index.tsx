import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../../providers/auth-provider";
import AuthDashboard from "../../components/Auth/Dashboard";
import colors from "../../constants/colors";
const UserTab = () => {
  const { session, signOut } = useAuth();

  const router = useRouter();

  return (
    <View
      style={{
        backgroundColor: colors.light.background,
      }}
      className="h-full"
    >
      {session ? (
        <AuthDashboard />
      ) : (
        <TouchableOpacity onPress={() => router.push("/auth/sign-in/")}>
          <Text>Tap here to login!</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UserTab;
