import { View, Text, Image, TouchableOpacity } from "react-native";
import icons from "../../../constants/icons";
import colors from "../../../constants/colors";

const PopularJobCard = ({ job }: { job: JobProps }) => {
  return (
    <View className="drop-shadow-sm p-4">
      <View className="flex justify-center items-center p-4">
        <Image
          source={{ uri: job.employer_logo }}
          resizeMode="contain"
          style={{
            width: 35,
            height: 35,
          }}
          className="w-20 h-20 rounded-lg"
        />
      </View>
      <Text className="opacity-50">
        {job.job_state},{job.job_country}
      </Text>
      <Text>{job.job_title}</Text>
    </View>
  );
};

const NearbyJobCard = () => {};

const JobCard = ({ job }: { job: JobProps }) => {
  return (
    <View className="bg-[#ccafff4e] p-4 w-[225px] h-[235px] rounded-3xl justify-between">
      <View className="flex-row justify-between">
        <Image
          source={{ uri: job.employer_logo }}
          style={{
            width: 50,
            height: 50,
          }}
        />

        <View className="flex-row">
          <Image
            source={icons.star}
            style={{
              width: 15,
              height: 15,
            }}
          />
          <Text>4.5</Text>
        </View>
      </View>
      <View>
        <Text className="font-bold text-lg">{job.job_title}</Text>
        <Text className="opacity-50">
          {job.job_state}, {job.job_country}
        </Text>
        <View className="opacity-50 flex-row gap-2">
          <Text>
            {new Date(job.job_posted_at_datetime_utc).toLocaleTimeString()}
          </Text>
          <Text>{job.job_employment_type}</Text>
        </View>
      </View>
      <View className="flex-row items-center justify-between">
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 10,
            backgroundColor: colors.light.tint,
          }}
        >
          <Text className="text-white font-bold">Apply Now</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={icons.bookmark}
            style={{
              width: 15,
              height: 15,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { PopularJobCard, NearbyJobCard, JobCard };
