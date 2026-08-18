import axios from "axios"




export const sentOtp = async (phone: string) => {
  return axios.post("https://shopino.iran.liara.run/v1/auth/send",{ phone })
}


export const verifyOtp = async (phone: string, otp: string) => {
  return axios.post("https://shopino.iran.liara.run/v1/auth/verify",{ phone, otp, isSeller: false })
}

