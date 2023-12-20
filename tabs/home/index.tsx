import { View, ScrollView } from "react-native";
import { SearchBar, SkilledJobs } from "../../components/Home";
import { styles } from "../../styles";

const HomeTab = () => {
  return (
    <ScrollView style={styles.containerWithGrowBg}>
      <View>
        <SearchBar />
        <SkilledJobs />
      </View>
    </ScrollView>
  );
};

export default HomeTab;
