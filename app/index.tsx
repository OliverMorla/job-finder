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
        <ScrollView>
          <View>
            <Text style={{ fontSize: 64 }}>Home</Text>
          </View>
        </ScrollView>
        <ScrollView>
          <View>
            <Text>Hello World!</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
