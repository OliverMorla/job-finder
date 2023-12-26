import { View, Text } from "react-native";
import { styles } from "../../styles";
import useFetchActions from "../../hooks/useFetchActions";

const NotificationsTab = () => {
  const {
    data: bookmarks,
    error,
    isLoading,
    reFetch,
  } = useFetchActions();

  return (
    <View style={styles.containerCenterWithHeightBg}>
      <Text>Notifications</Text>
    </View>
  );
};

export default NotificationsTab;
