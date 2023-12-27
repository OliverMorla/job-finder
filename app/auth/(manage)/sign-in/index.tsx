import { useState } from "react";
import { Stack, router } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import icons from "../../../../constants/icons";
import colors from "../../../../constants/colors";
import { useAuth } from "../../../../providers/auth-provider";

const SignIn = () => {
  const { signIn } = useAuth();

  const [input, setInput] = useState<SignInInputProps>({
    email: "",
    password: "",
  });

  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <View className="flex-1">
      <Stack.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Image
                source={icons.arrow}
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </TouchableOpacity>
          ),
          headerTitle: () => <Text> Sign in </Text>,
          headerRight: () => null,
        }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="items-center justify-center flex-1"
        style={{ backgroundColor: colors.light.background }}
      >
        <Text className="text-6xl font-bold text-center">Let's you in</Text>
        <View className="">
          <View className="gap-4">
            <View className="flex-row relative items-center">
              <Image
                source={icons.mail}
                style={{
                  width: 25,
                  height: 25,
                }}
                className="absolute z-20 opacity-60 ml-2"
              />
              <TextInput
                placeholder="Email"
                value={input.email}
                onChangeText={(text) => setInput({ ...input, email: text })}
                textContentType="emailAddress"
                placeholderTextColor={colors.light.fadedText}
                className="bg-gray-200 w-[250px] py-4 px-10"
              />
            </View>
            <View className="flex-row relative items-center">
              <Image
                source={icons.password}
                style={{
                  width: 25,
                  height: 25,
                }}
                className="absolute z-20 opacity-60 ml-2"
              />
              <TextInput
                placeholder="Password"
                value={input.password}
                secureTextEntry={isVisible ? false : true}
                textContentType="password"
                placeholderTextColor={colors.light.fadedText}
                onChangeText={(text) => setInput({ ...input, password: text })}
                className="bg-gray-200 w-[250px] py-4 px-10"
              />
              <TouchableOpacity
                onPress={() => setIsVisible(!isVisible)}
                className="absolute items-center justify-center right-0 mr-2 opacity-50"
              >
                <Image
                  source={icons.visible}
                  style={{
                    width: 25,
                    height: 25,
                  }}
                  className=""
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            className="bg-[#CCAFFF] w-[250px] h-[55px] items-center justify-center mt-4"
            onPress={async () => await signIn(input)}
          >
            <Text className="text-white font-bold">Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#e3d4fe] w-[250px] h-[55px] items-center justify-center mt-4"
            onPress={() => router.push("/auth/sign-up/")}
          >
            <Text className="text-white font-bold">
              Don't have an account? Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignIn;
