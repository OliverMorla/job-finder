import { View, Text } from "react-native";
import { styles } from "../../styles";
import { getBookmarks } from "../../lib/actions/bookmarks-actions";
import { useAuth } from "../../providers/auth-provider";
import useFetchActions from "../../hooks/useFetchActions";
import { useEffect, useState } from "react";
import db from "../../lib/db-local";

const BookmarksTab = () => {
  const { session } = useAuth();

  const [bookmarks, setBookmarks] = useState([]);
  if (!session) return;

  const fetchData = async () => {
    const {
      bookmarks: fetchedBookmarks,
      ok,
      message,
    } = await getBookmarks(session.user.id);
    setBookmarks(fetchedBookmarks);
  };
  useEffect(() => {
    fetchData();
  }, []);

  
  const jobs = db.data

  return (
    <View style={styles.containerCenterWithHeightBg}>
      {bookmarks.map((job) => (
        <Text>{job.jobId}</Text>
      ))}
    </View>
  );
};

export default BookmarksTab;
