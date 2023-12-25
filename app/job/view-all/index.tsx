import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import { ViewAllJobCards } from "../../../components/Jobs/Cards";
import db from "../../../lib/db-local";
import colors from "../../../constants/colors";
const ViewAllJobs = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.light.background,
      }}
    >
      <FlatList
        className="mt-6"
        data={db.data}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="items-center"
            onPress={() => router.push(`/job/details/${item.job_id}`)}
          >
            <ViewAllJobCards job={item as any} />
          </TouchableOpacity>
        )}
        contentContainerStyle={{ gap: 20 }}
        keyExtractor={(item) => item.job_id.toString()}
      />
    </SafeAreaView>
  );
};

export default ViewAllJobs;
