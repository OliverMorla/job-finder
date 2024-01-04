import axios from "axios";
import { Alert } from "react-native";

const api = "https://job-finder-node-production.up.railway.app";

// fetch server to retrieve all bookmarks
const getActivities = async () => {
  try {
    const res = await axios.get(`${api}/auth/activities`);
    return res.data;
  } catch (err) {
    Alert.alert(err instanceof Error ? err.message : "Something went wrong");
  }
};
