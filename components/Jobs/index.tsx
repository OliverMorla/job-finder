import {
  View,
  Text,
  SafeAreaView,
  Image,
  ImageSourcePropType,
} from "react-native";

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

const Job = () => {};

export { PopularJobCard, NearbyJobCard };
