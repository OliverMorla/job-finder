import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import axios from "axios";
import { router } from "expo-router";

interface AuthContextProps {
  signIn: (input: SignInInputProps) => Promise<void>;
  signUp: (input: SignUpInputProps) => Promise<void>;
  signOut: () => Promise<void>;
  session: SessionProps | null;
}

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
      const res = await axios.post("http://localhost:3000/auth/login", input);

      if (res.data.ok) {
        await AsyncStorage.setItem("auth-session", JSON.stringify(input));

        router.push("/");

        return;
      }
    } catch (err) {
      console.log(err instanceof Error ? err.message : null);
    }
  };

  const signOut = async () => {
    await AsyncStorage.removeItem("auth-session");
  };

  const signUp = async () => {};

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
