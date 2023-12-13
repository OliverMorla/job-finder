import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import { JobCard } from "../../../components/Jobs/Cards";
import db from "../../../lib/db-local";
const ViewAllJobs = () => {
  return (
    <SafeAreaView>
      <View>
        <Text className="text-center font-bold text-xl">View All Jobs</Text>
      </View>
      <FlatList
        className="mt-6"
        data={db.data}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="items-center"
            onPress={() => router.push(`/job/details/${item.job_id}`)}
          >
            <JobCard job={item as any} />
          </TouchableOpacity>
        )}
        contentContainerStyle={{ gap: 20 }}
        keyExtractor={(item) => item.job_id.toString()}
      />
    </SafeAreaView>
  );
};

export default ViewAllJobs;
