import { Stack } from "expo-router";

import { ScreenHeaderBtn, ScreenHeaderBtnWithText } from "../components/Header";

import colors from "../constants/colors";
import icons from "../constants/icons";

import { AuthProvider } from "../providers/auth-provider";

export default function Layout() {
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
              onPress={() => {}}
            />
          ),
        }}
      />
    </AuthProvider>
  );
}
