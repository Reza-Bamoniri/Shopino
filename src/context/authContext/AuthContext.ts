import { createContext } from "react"
import type { userType } from "../types/userType";

export type AuthContextType = {
    user: userType | null;
    isLoading: boolean
    refreshUser: () => Promise<void>
};

const AuthContext = createContext<AuthContextType | null>(null)
  

export default AuthContext