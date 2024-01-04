import { FlatList, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/auth-provider";
import { getBookmarks } from "../../lib/actions/bookmarks-actions";
import db from "../../lib/db-local";
import { JobActivityCard } from "../../components/Jobs/Cards";
import { router } from "expo-router";

const NotificationsScreen = () => {
  const { session } = useAuth();

  const [bookmarks, setBookmarks] = useState<BookmarkProps[]>([]);

  const fetchData = async () => {
    const {
      bookmarks: fetchedBookmarks,
      ok,
      message,
    } = await getBookmarks(session?.user.id!);
    setBookmarks(fetchedBookmarks);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const filteredBookmarks: JobProps[] = [];

  bookmarks.forEach((bookmark) => {
    db.data.find((job) => {
      if (job.job_id === bookmark.jobId) {
        const JobWithTimestamp = {
          ...job,
          timestamp: bookmark.createdAt,
        };
        filteredBookmarks.push(JobWithTimestamp as any);
      }
    });
  });

  return (
    <View style={styles.containerCenterWithHeightBg}>
      <FlatList
        className="mt-6"
        data={filteredBookmarks}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="items-center"
            onPress={() => router.push(`/jobs/details/${item.job_id}`)}
          >
            <JobActivityCard job={item as any} />
          </TouchableOpacity>
        )}
        contentContainerStyle={{ gap: 20 }}
        keyExtractor={(item) => item.job_id.toString()}
      />
    </View>
  );
};

export default NotificationsScreen;
