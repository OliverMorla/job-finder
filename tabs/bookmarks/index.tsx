import { View, Text } from "react-native";
import { styles } from "../../styles";
import { getBookmarks } from "../../lib/actions/bookmarks-actions";
import useFetchActions from "../../hooks/useFetchActions";

const BookmarksTab = () => {
  const {
    data: bookmarks,
    error,
    isLoading,
    reFetch,
  } = useFetchActions(getBookmarks);

  return (
    <View style={styles.containerCenterWithHeightBg}>
      <Text>Bookmarks</Text>
    </View>
  );
};

export default BookmarksTab;
