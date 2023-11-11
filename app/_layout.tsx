import { Stack } from "expo-router";

import {
  ScreenHeaderBtn,
  ScreenHeaderRightButtons,
} from "../components/Header/screen-header-buttons";

import icons from "../constants/icons";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerTintColor: "#fff",
        headerLeft: () => (
          <ScreenHeaderBtn
            iconUrl={icons.logo}
            onPress={() => {}}
            dimensions={{ width: 100, height: 40 }}
          />
        ),
        headerRight: () => (
          <ScreenHeaderRightButtons
            dimensions={{
              width: 25,
              height: 25,
            }}
          />
        ),
      }}
    />
  );
}
