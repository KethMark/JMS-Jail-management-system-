import { createContext, useContext } from "react";

interface AuthContextType {
  token: string | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error(
      "useAuth must be used within the authProvider"
    );
  }

  return authContext;
};
