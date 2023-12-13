import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Stack, router, useGlobalSearchParams } from "expo-router";
import db from "../../../lib/db-local";
import colors from "../../../constants/colors";
import icons from "../../../constants/icons";

const JobDetails = () => {
  const params = useGlobalSearchParams();

  const [currentTab, setCurrentTab] = useState<"description" | "company">(
    "description"
  );
  const job = db.data.find((job) => job.job_id === params.jobId);

  if (!job) return null;

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.light.background,
      }}
    >
      <Stack.Screen
        options={{
          headerTitle: () => <Text>{job?.employer_name}</Text>,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Image
                source={icons.arrow}
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </TouchableOpacity>
          ),
        }}
      ></Stack.Screen>
      <ScrollView className="p-6 mb-10">
        <View className="items-center">
          <Image
            source={{ uri: job?.employer_logo! }}
            style={{
              width: 50,
              height: 50,
            }}
          />
          <Text className="font-bold text-2xl">{job?.job_title}</Text>
          <View className="flex-row gap-2 opacity-50">
            <Text>{job?.employer_name} </Text>
            <Text>{job?.job_country}</Text>
            <Text>
              {new Date(job.job_posted_at_datetime_utc).toLocaleTimeString()}
            </Text>
          </View>
        </View>
        <View>
          <Text>Salary</Text>
        </View>
        <View>
          <View className="flex-row bg-[#ccafff4e] p-3 rounded-2xl items-center mt-4">
            <TouchableOpacity
              onPress={() => setCurrentTab("company")}
              className="p-3 rounded-xl w-[50%] items-center"
              style={{
                backgroundColor:
                  currentTab === "company" ? colors.light.tint : undefined,
              }}
            >
              <Text>About Company</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setCurrentTab("description")}
              className="p-3 rounded-xl flex-1 items-center"
              style={{
                backgroundColor:
                  currentTab === "description" ? colors.light.tint : undefined,
              }}
            >
              <Text>Job Description</Text>
            </TouchableOpacity>
          </View>
          {currentTab === "company" ? (
            <View className="mt-6">
              <Text className="font-bold text-xl">About Company</Text>
              <Text className="mt-2">
                Company website: {job?.employer_website}
              </Text>
              <Text className="mt-2">Company name: {job?.employer_name}</Text>
              <Text className="mt-2">
                Company type: {job?.employer_company_type}
              </Text>
            </View>
          ) : currentTab === "description" ? (
            <View className="mt-6">
              <Text className="font-bold text-xl">Job Description</Text>
              <Text className="mt-2">{job?.job_description}</Text>
            </View>
          ) : null}
        </View>
        <View>
          <Text className="text-center opacity-50 mt-6">
            This job was posted on{" "}
            {new Date(job.job_posted_at_datetime_utc).toLocaleDateString()}
          </Text>
        </View>
      </ScrollView>

      <TouchableOpacity
        className="p-4 items-center text-center w-[80%] mx-auto rounded-2xl bottom-10"
        style={{
          backgroundColor: colors.light.tint,
        }}
      >
        <Text className="text-white font-bold">Apply Now</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default JobDetails;
