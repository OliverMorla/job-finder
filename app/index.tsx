import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import icons from "../constants/icons";

import HomeTab from "../tabs/home";
import BookmarksTab from "../tabs/bookmarks";
import NotificationsTab from "../tabs/notifications";
import UserTab from "../tabs/user";
import colors from "../constants/colors";

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeTab}
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
      <Tab.Screen
        name="Bookmarks"
        component={BookmarksTab}
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
      <Tab.Screen
        name="Notifications"
        component={NotificationsTab}
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
      <Tab.Screen
        name="User"
        component={UserTab}
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
    </Tab.Navigator>
  );
}
