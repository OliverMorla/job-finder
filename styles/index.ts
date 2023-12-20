import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export const styles = StyleSheet.create({
  containerWithGrow: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },

  containerWithGrowBg: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.light.background,
  },

  containerWithHeight: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
  },

  containerWithHeightBg: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    backgroundColor: colors.light.background,
  },

  containerCenterWithHeight: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  containerCenterWithHeightBg: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light.background,
  },
});

export const stylesWithGap = (gap: number) => {
  return StyleSheet.create({
    containerWithHFull: {
      display: "flex",
      height: "100%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: gap,
    },
  });
};
