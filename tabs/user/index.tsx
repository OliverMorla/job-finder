import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import { useAuth } from "../../providers/auth-provider";
import AuthDashboard from "../../components/Auth/Dashboard";
import { styles, stylesWithGap } from "../../styles";

const UserTab = () => {
  const { session } = useAuth();

  const router = useRouter();

  return (
    <View style={styles.containerWithHeightBg}>
      {session ? (
        <AuthDashboard />
      ) : (
        <View style={styles.containerCenterWithHeight} className="gap-4">
          <TouchableOpacity
            className="bg-green-500 p-4 items-center rounded-lg"
            onPress={() => router.push("/auth/sign-in/")}
          >
            <Text className="font-bold">Sign In</Text>
            <Text className="opacity-40">
              Tap here to login and get started
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-blue-500 p-4 items-center rounded-lg"
            onPress={() => router.push("/auth/sign-up/")}
          >
            <Text className="font-bold">Sign Up</Text>
            <Text className="opacity-40">Tap here to create an account</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default UserTab;
