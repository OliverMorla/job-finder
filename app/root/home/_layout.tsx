import { Drawer } from "expo-router/drawer";

const MenuLayout = () => {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="changelog"
        options={{
          drawerLabel: "Changelog",
          title: "Changelog",
        }}
      />
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          title: "Home",
        }}
      />
    </Drawer>
  );
};

export default MenuLayout;
