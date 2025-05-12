import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import apiInstance from "./apisettings";

interface AuthProps {
  authState?: { token: string | null; authenticated: boolean | null };
  onRegister?: (name: string, email: string, password: string) => Promise<any>;
  onLogin?: (email: string, password: string) => Promise<any>;
  onLogout?: () => Promise<any>;
}

const TOKEN_KEY = "my-jwt";
const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
  }>({
    token: null,
    authenticated: null,
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = await AsyncStorage.getItem(TOKEN_KEY);
      console.log("🚀 ~ loadToken ~ token:", token);

      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setAuthState({ token, authenticated: true });
        router.replace("/(protected)/(tabs)");
      } else {
        setAuthState({ token: null, authenticated: null });
        router.replace("/start");
      }
    };

    loadToken();
  }, []);

  const register = async (name: string, email: string, password: string) => {
    try {
      await apiInstance.post(`/Users`, { name, email, password });
    } catch (error: any) {
      return {
        error: true,
        msg:
          error.response?.data?.msg ||
          error.message ||
          "Ocorreu um erro ao registrar. Tente novamente.",
      };
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const result = await apiInstance.post(`/Login`, { email, password });

      console.log("🚀 ~ login ~ result:", result);

      setAuthState({ token: result.data.token, authenticated: true });

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${result.data.token}`;

      await AsyncStorage.setItem(TOKEN_KEY, result.data.token);

      return result;
    } catch (e) {
      alert((e as any).response?.data?.msg || "Erro ao fazer login");
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem(TOKEN_KEY);
    axios.defaults.headers.common["Authorization"] = "";
    setAuthState({ token: null, authenticated: false });
  };

  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
