import axios from "axios";
import { Alert } from "react-native";

const api = "https://job-finder-node-production.up.railway.app";

// fetch server to retrieve all bookmarks
const getBookmarks = async (userId: string) => {
  try {
    const res = await axios.post(`${api}/auth/bookmark/retrieve`, { userId });
    return res.data;
  } catch (err) {
    return Alert.alert("Error", "Failed to fetch bookmarks");
  }
};

// fetch server to store a bookmark
const addToBookmarks = async (jobId: string, userId: string) => {
  if (!jobId) return Alert.alert("Error", "Job ID is missing");

  try {
    const res = await axios.post(`${api}/auth/bookmark/add`, { jobId, userId });
    if (res.data.ok) {
      return Alert.alert("Success", "Bookmark added");
    }
  } catch (err) {
    return Alert.alert("Error", "Job already bookmarked");
  }
};

// fetch server to remove a bookmark
const removeFromBookmarks = async (jobId: string, userId: string) => {
  if (!jobId) return Alert.alert("Error", "Job ID is missing");

  try {
    const res = await axios.delete(`${api}/auth/bookmark/${jobId}`);
    if (res.data.ok) {
      return Alert.alert("Success", "Bookmark removed");
    }
  } catch (err) {
    return Alert.alert("Error", "Failed to remove bookmark");
  }
};

export { getBookmarks, addToBookmarks, removeFromBookmarks };
