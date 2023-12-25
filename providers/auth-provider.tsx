import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { router } from "expo-router";
import axios from "axios";

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<SessionProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadStorageData = async () => {
    try {
      setIsLoading(true);
      const dataSerialized = await AsyncStorage.getItem("auth-session");

      if (dataSerialized) {
        const dataUnserialized = JSON.parse(dataSerialized);
        setSession(dataUnserialized);
      }
    } catch (err) {
      console.log(err instanceof Error ? err.message : null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadStorageData();
  }, []);

  const signIn = async (input: SignInInputProps) => {
    if (input.email === "" || input.password === "") {
      return Alert.alert("Please fill out all fields");
    }

    if (!input.email?.includes("@")) {
      return Alert.alert("Please enter a valid email!");
    }

    try {
      const res = await axios.post(
        "https://job-finder-node-production.up.railway.app/auth/login",
        input
      );

      if (res.data.ok) {
        const newSession = {
          expires: "",
          user: res.data.user,
        };

        setSession(newSession);

        await AsyncStorage.setItem("auth-session", JSON.stringify(newSession));

        router.push("/");

        return;
      }
    } catch (err) {
      console.log(err instanceof Error ? err.message : null);
    }
  };

  const signUp = async (input: SignUpInputProps) => {
    if (
      input.email === "" ||
      input.password === "" ||
      input.displayName === ""
    ) {
      return Alert.alert("Please fill out all fields");
    }

    if (!input.email?.includes("@")) {
      return Alert.alert("Please enter a valid email!");
    }

    try {
      const res = await axios.post(
        "https://job-finder-node-production.up.railway.app/auth/register",
        input
      );

      if (res.data.ok) {
        Alert.alert(res.data.message);

        router.push("/auth/sign-in/");

        return;
      }
    } catch (err) {
      console.log(err instanceof Error ? err : null);
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem("auth-session");
      setSession(null);
    } catch (err) {
      console.log(err instanceof Error ? err : null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        signUp,
        session,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a SocketProvider");
  }

  return context;
};
