import { Stack } from "expo-router";

const MenuLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          // Set the presentation mode to modal for our modal route.
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
        }}
      />
    </Stack>
  );
};

export default MenuLayout;
