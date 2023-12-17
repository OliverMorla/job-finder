import { View, ScrollView } from "react-native";
import { SearchBar, SkilledJobs } from "../../components/Home";
import colors from "../../constants/colors";
import { useAuth } from "../../providers/auth-provider";

const HomeTab = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.light.background,
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <SearchBar />
        <SkilledJobs />
      </View>
    </ScrollView>
  );
};

export default HomeTab;
