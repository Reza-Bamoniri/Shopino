import api from "./api"




export const sentOtp = async (phone: string) => {
  return api.post("/auth/send",{ phone })
}


export const verifyOtp = async (phone: string, otp: string) => {
  return api.post("/auth/verify",
    { phone, otp, isSeller: false })
}



export const getMe = async () => {
    const { data } = await api.get("/auth/me"
        
    )
    return data;
}



export const logout = async () => {
    const { data } = await api.post("/auth/logout",{}
        
    )
    return data;
}