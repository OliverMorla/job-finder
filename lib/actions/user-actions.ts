import axios from "axios";
import { Alert } from "react-native";

const api = "https://job-finder-node-production.up.railway.app";

const deleteAccount = async (userId: string) => {
  if (!userId) return Alert.alert("Error => User ID is missing");

  try {
    const res = await axios.delete(`${api}/auth/user`, {
      data: { userId },
    });
    return res.data;
  } catch (err) {}
};

const updateAccount = async (userId: string, data: any) => {
  if (!userId) return Alert.alert("Error => User ID is missing");

  try {
    const res = await axios.put(`${api}/auth/user`, data);
    return res.data;
  } catch (err) {}
};

export { deleteAccount, updateAccount };
