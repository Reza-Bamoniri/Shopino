import { useEffect, useState } from "react";
import AuthContext from "../AuthContext";
import { getMe } from "../../services/auth.service";

type AuthProviderProp = {children: React.ReactNode}



export const AuthProvider = ({children}: AuthProviderProp) => {

    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      
        const initAuth = async () => {
           setIsLoading(true)
            try {

                const res = await getMe()
                setUser(res.data.user);
                
                
                
 
                
            } catch (error) {
                console.log(error);
                
            }finally{setIsLoading(false)}
        }

        initAuth()
    },[])
    


    return <AuthContext.Provider value={{user, isLoading}}>{children}</AuthContext.Provider>
}


export default AuthProvider;