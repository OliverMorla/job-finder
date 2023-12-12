import {
  View,
  TextInput,
  Image,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import icons from "../../constants/icons";
import db from "../../lib/db-local";
import { JobCard } from "../Jobs/Cards";
import colors from "../../constants/colors";
import { router } from "expo-router";

const SearchBar = () => {
  return (
    <View className="flex-1 p-4 items-center relative">
      <View>
        <Text className="text-4xl font-bold">
          Your skill is required for many jobs
        </Text>
        <Image
          source={icons.searchBanner}
          style={{
            objectFit: "contain",
            width: "auto",
          }}
        />
      </View>
      <View className="absolute flex-row items-center bottom-6">
        <TextInput
          placeholder="Search any job..."
          className="relative bg-[#CCAFFF] rounded-3xl w-[250px] h-[65px] text-center"
          placeholderTextColor={"#fff"}
        />
        <Image source={icons.search} className="w-6 h-6 absolute ml-10" />
      </View>
    </View>
  );
};

const SkilledJobs = () => {
  return (
    <View className="p-4">
      <View className="flex-row justify-between items-center">
        <Text className="font-bold text-2xl">Based on your skills</Text>
        <TouchableOpacity>
          <Text
            style={{
              color: colors.light.tint,
            }}
          >
            View all
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        className="mt-6"
        data={db.data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/job/details/${item.job_id}`)}
          >
            <JobCard job={item as any} />
          </TouchableOpacity>
        )}
        contentContainerStyle={{ columnGap: 20 }}
        keyExtractor={(item) => item.job_id.toString()}
        horizontal
      />
    </View>
  );
};

export { SearchBar, SkilledJobs };
