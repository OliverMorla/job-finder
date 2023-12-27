import { Stack } from "expo-router";

import { ScreenHeaderBtn, ScreenHeaderBtnWithText } from "../components/Header";

import colors from "../constants/colors";
import icons from "../constants/icons";

import { AuthProvider } from "../providers/auth-provider";
import { useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

export default function Layout() {
  const { navigate, dispatch } = useNavigation();
  const Drawer = createDrawerNavigator();

  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.light.background,
          },
          headerTitle: () => <ScreenHeaderBtnWithText onPress={() => {}} />,
          headerLeft: () => (
            <ScreenHeaderBtn
              dimensions={{
                height: 25,
                width: 25,
              }}
              iconUrl={icons.menu}
              onPress={() => {}}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              dimensions={{
                height: 25,
                width: 25,
              }}
              iconUrl={icons.user}
              onPress={() => navigate("User" as never)}
            />
          ),
        }}
      />
    </AuthProvider>
  );
}
