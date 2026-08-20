import axios from "axios"




export const sentOtp = async (phone: string) => {
  return axios.post("https://shopino.iran.liara.run/v1/auth/send",{ phone })
}


export const verifyOtp = async (phone: string, otp: string) => {
  return axios.post("https://shopino.iran.liara.run/v1/auth/verify",
    { phone, otp, isSeller: false },{withCredentials: true})
}



export const getMe = async () => {
    const { data } = await axios.get("https://shopino.iran.liara.run/v1/auth/me",
        {withCredentials: true}
    )
    return data;
}



export const logout = async () => {
    const { data } = await axios.post("https://shopino.iran.liara.run/v1/auth/logout",{},
        {withCredentials: true}
    )
    return data;
}