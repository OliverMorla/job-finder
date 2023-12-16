import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface SignInInputProps {
  user: {
    email: string;
    password: string;
  };
}

interface SignUpInputProps {
  displayName: string;
  avatar: string;
  email: string;
  password: string;
}

interface SessionProps {
  expires: string;
  user: {
    displayName: string;
    email: string;
    avatar: string;
  };
}

interface AuthContextProps {
  signIn: (input: SignInInputProps) => Promise<void>;
  signUp: (input: SignUpInputProps) => Promise<void>;
  signOut: () => Promise<void>;
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
    await AsyncStorage.setItem("auth-session", JSON.stringify(input));
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
