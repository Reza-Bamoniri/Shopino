import { useEffect, useState } from "react";
import AuthContext from "../AuthContext";
import { getMe } from "../../services/auth.service";

type AuthProviderProp = {children: React.ReactNode}



export const AuthProvider = ({children}: AuthProviderProp) => {

    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const initAuth = async () => {
           setIsLoading(true)
            try {

                const res = await getMe()
                setUser(res.data.user);
                
                
                
 
                
            } catch (error) {
                console.log(error);
                
            }finally{setIsLoading(false)}
        };



    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        initAuth()
    },[])
    

    const refreshUser = async () => initAuth()


    return <AuthContext.Provider value={{user, isLoading, refreshUser}}>{children}</AuthContext.Provider>
}


export default AuthProvider;