import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import icons from "../../../constants/icons";
import colors from "../../../constants/colors";
import { checkImage } from "../../../lib/checkImage";
import { addToBookmarks } from "../../../lib/actions/bookmarks-actions";
import { useAuth } from "../../../providers/auth-provider";
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
  const { session } = useAuth();
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
          onPress={() => Linking.openURL(job.job_apply_link)}
        >
          <Text className="text-white font-bold">Apply Now</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => addToBookmarks(job.job_id, session?.user.id!)}
        >
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

const ViewAllJobCards = ({ job }: { job: JobProps }) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: "#D9D9D9",
        borderRadius: 10,
        width: "90%",
      }}
    >
      <View className="flex-row justify-evenly p-2">
        {checkImage(job.employer_logo) ? (
          <Image
            source={{ uri: job.employer_logo }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 10,
              objectFit: "contain",
              shadowColor: "#D9D9D9",
              shadowOffset: {
                height: 3,
                width: 0,
              },
            }}
          />
        ) : (
          <Image
            source={icons.job}
            style={{
              width: 50,
              height: 50,
              borderRadius: 10,
              objectFit: "contain",
              shadowColor: "#D9D9D9",
              shadowOffset: {
                height: 3,
                width: 0,
              },
            }}
          />
        )}
        <View>
          <Text className="font-bold text-lg" numberOfLines={1}>
            {job.job_title.slice(0, 30)}
          </Text>
          <Text className="opacity-40">{job.employer_name}</Text>
        </View>
        <Image
          source={icons.bookmark}
          style={{
            width: 25,
            height: 25,
          }}
        />
      </View>
      <View
        style={{
          borderTopColor: "#D9D9D9",
          borderTopWidth: 1,
          alignItems: "center",
          gap: 6,
        }}
        className="p-4 items-center"
      >
        <Text className="opacity-50 font-semibold">
          {job.job_city}, {job.job_country}
        </Text>
        <Text>
          ${job.job_min_salary ? job.job_min_salary : "XXXXX"} - $
          {job.job_max_salary ? job.job_max_salary : "XXXXX"} /year
        </Text>
        <View className="">
          {job.job_employment_type === "FULLTIME" && (
            <Text
              style={{
                borderWidth: 1,
                borderColor: "#D9D9D9",
                padding: 4,
                borderRadius: 10,
              }}
            >
              Full Time
            </Text>
          )}
          {job.job_employment_type === "CONTRACTOR" && (
            <Text
              style={{
                borderWidth: 1,
                borderColor: "#D9D9D9",
                padding: 4,
                borderRadius: 10,
              }}
            >
              Contractor
            </Text>
          )}
          {job.job_employment_type === "PARTTIME" && (
            <Text
              style={{
                borderWidth: 1,
                borderColor: "#D9D9D9",
                padding: 4,
                borderRadius: 10,
              }}
            >
              Part Time
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export { PopularJobCard, NearbyJobCard, JobCard, ViewAllJobCards };
