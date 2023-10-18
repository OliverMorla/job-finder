import { Button, Text, Image } from "react-native";
import { Stack } from "expo-router";
import React from "react";

export default function Home() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <Image
              style={{
                width: 100,
                height: 50,
                objectFit: "contain",
                left: 0,
                top: 0,
              }}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Indeed_logo.svg/2560px-Indeed_logo.svg.png",
              }}
            />
          ),
          headerRight: () => (
            <Button
              onPress={() => setCount((c) => c + 1)}
              title="Update count"
            />
          ),
        }}
      />
      <Text>Count: {count}</Text>
    </>
  );
}
