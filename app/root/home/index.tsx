import { ScrollView, Text, View } from "react-native";
import { styles } from "../../../styles";
import { SearchBar, SkilledJobs } from "../../../components/Home";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.containerWithGrowBg}>
      <View>
        <SearchBar />
        <SkilledJobs />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
