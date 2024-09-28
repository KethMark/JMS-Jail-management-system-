import { ReactNode, useLayoutEffect, useState } from "react";
import { api } from "../../lib/axios";
import { AuthContext } from "../../lib/context";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  useLayoutEffect(() => {
    const authInterceptor = api.interceptors.request.use((config) => {
      config.headers.Authorization = token
        ? `Bearer ${token}`
        : config.headers.Authorization;
      return config;
    });
    return () => {
      api.interceptors.request.eject(authInterceptor);
    };
  }, [token]);

  useLayoutEffect(() => {
    const refreshInterceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            const refreshToken = localStorage.getItem("refreshToken");
            const response = await api.post("/api/v5/user/refreshToken", {
              refreshToken,
            });

            const newToken = response.data.newToken;

            localStorage.setItem("token", newToken);
            setToken(newToken);

            originalRequest.headers.Authorization = `Bearer ${newToken}`;

            return api(originalRequest);
          } catch (error) {
            setToken(null);
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");
          }
        }
        return Promise.reject(error);
      }
    );
    return () => {
      api.interceptors.response.eject(refreshInterceptor);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
