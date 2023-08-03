import { View, Text, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { Stack, useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();

  return (
    <>
      <SafeAreaView>
        <Stack.Screen
          options={{
            header: () => null,
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default Home;
