import axios from "axios";
import { Alert } from "react-native";

const api = "https://job-finder-node-production.up.railway.app";

// fetch server to retrieve all bookmarks
const getBookmarks = async () => {
  try {
    const res = await axios.get(`${api}/auth/bookmarks`);
    return res.data;
  } catch (err) {}
};

// fetch server to store a bookmark
const addToBookmarks = async (jobId: string) => {
  if (!jobId) return Alert.alert("Error", "Job ID is missing");

  try {
    const res = await axios.post(`${api}/auth/bookmarks`, { jobId });
    return res.data;
  } catch (err) {}
};

// fetch server to remove a bookmark
const removeFromBookmarks = async (jobId: string) => {
  if (!jobId) return Alert.alert("Error", "Job ID is missing");

  try {
    const res = await axios.delete(`${api}/auth/bookmarks/${jobId}`);
    return res.data;
  } catch (err) {}
};
