import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import icons from "../constants/icons";
import colors from "../constants/colors";

import HomeTab from "../tabs/home";
import BookmarksTab from "../tabs/bookmarks";
import NotificationsTab from "../tabs/notifications";
import UserTab from "../tabs/user";

import "react-native-gesture-handler";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function Root() {
  return (
    <NavigationContainer independent>
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
    </NavigationContainer>
  );
}
