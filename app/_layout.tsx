import { Slot } from "expo-router";
import { Stack } from "expo-router/stack";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { colors } from "@/styles/global.styles";
import { StatusBar } from "expo-status-bar";

const Layout = () => {
  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
      <View>
        <Slot />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 56,
    width: "100%",
    backgroundColor: colors.gray2,
  },
  container: {
    width: "100%",
  },
});

export default Layout;
