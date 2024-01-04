import { Stack, Tabs } from "expo-router";

import { Image } from "react-native";

import icons from "../../constants/icons";
import colors from "../../constants/colors";
import { DrawerToggleButton } from "@react-navigation/drawer";

const HomeLayout = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.home}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? colors.light.tint : "#748c94",
                }}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="bookmarks"
          options={{
            title: "Bookmarks",
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.bookmark}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? colors.light.tint : "#748c94",
                }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="notifications"
          options={{
            title: "Notifications",
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.chat}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? colors.light.tint : "#748c94",
                }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="user"
          options={{
            title: "User",
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.user}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? colors.light.tint : "#748c94",
                }}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default HomeLayout;
