import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Stack, router, useGlobalSearchParams } from "expo-router";

import { ViewAllJobCards } from "../../../components/Jobs/Cards";

import db from "../../../lib/db-local";
import colors from "../../../constants/colors";
import { ScreenHeaderBtn } from "../../../components/Header";
import icons from "../../../constants/icons";

const ViewAllJobs = () => {
  const {
    search,
  }: {
    search: string;
  } = useGlobalSearchParams();

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.light.background,
      }}
    >
      <Stack.Screen
        options={{
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.arrow}
              onPress={() => router.back()}
              dimensions={{
                height: 25,
                width: 25,
              }}
            />
          ),
        }}
      />
      {search === "" ? (
        <FlatList
          className="mt-6"
          data={db.data}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="items-center"
              onPress={() => router.push(`/jobs/details/${item.job_id}`)}
            >
              <ViewAllJobCards job={item as any} />
            </TouchableOpacity>
          )}
          contentContainerStyle={{ gap: 20 }}
          keyExtractor={(item) => item.job_id.toString()}
        />
      ) : (
        <FlatList
          className="mt-6"
          data={db.data}
          renderItem={({ item }) => {
            if (item.job_title?.toLowerCase()) {
              return (
                <TouchableOpacity
                  className="items-center"
                  onPress={() => router.push(`/jobs/details/${item.job_id}`)}
                >
                  <ViewAllJobCards job={item as any} />
                </TouchableOpacity>
              );
            }
          }}
          contentContainerStyle={{ gap: 20 }}
          keyExtractor={(item) => item.job_id.toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default ViewAllJobs;
