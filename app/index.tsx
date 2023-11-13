import {
  Button,
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Stack, Link, useRouter } from "expo-router";
import { useState } from "react";
import SearchBar from "../components/Home/search-bar";
import useFetch from "../hooks/useFetch";
import { PopularJobCard } from "../components/Jobs";
import { data } from "../db";

export default function Home() {
  const router = useRouter();
  
  // const { data, error, isLoading } = useFetch({
  //   num_pages: 1,
  //   page: 1,
  //   query: "React Developer Jobs In New York, USA",
  // });

  const error = false;
  const isLoading = false;

  return (
    <ScrollView>
      <View>
        <SearchBar />
      </View>
      <View>
        <Text className="font-bold text-2xl pt-6">Popular jobs</Text>
        <View>
          {isLoading ? (
            <ActivityIndicator size={"large"} color={"black"} />
          ) : error ? (
            <Text>{error}</Text>
          ) : (
            <FlatList
              data={data}
              renderItem={({ item }) => <PopularJobCard job={item as any} />}
              contentContainerStyle={{ columnGap: 1 }}
              keyExtractor={(item) => item.job_id.toString()}
              horizontal
            />
          )}
        </View>
        <Text className="pt-2">Jobs based on your activity on job.io</Text>
      </View>
      <View>
        <Text className="font-bold text-2xl pt-6">Recommended jobs</Text>
        <Text className="pt-2">
          Based on your activity on job.io, we've curated a list of job
          recommendations just for you.
        </Text>
        <View className="mt-4">
          {isLoading ? (
            <ActivityIndicator size={"large"} color={"black"} />
          ) : error ? (
            <Text> An Error has Occured </Text>
          ) : (
            <FlatList
              data={data}
              renderItem={({ item }) => <PopularJobCard job={item as any} />}
              contentContainerStyle={{ columnGap: 1 }}
              keyExtractor={(item) => item.job_id.toString()}
              horizontal
            />
          )}
        </View>
      </View>
      <View>
        <Text className="font-bold text-2xl pt-6">All Jobs</Text>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={"black"} />
        ) : error ? (
          <Text>{error}</Text>
        ) : (
          data.map((job) => (
            <TouchableOpacity
              key={job.job_id}
              onPress={() => router.push(`/job-details/${job.job_id}`)}
            >
              <PopularJobCard job={job as any} />
            </TouchableOpacity>
          ))
        )}
      </View>
    </ScrollView>
  );
}
