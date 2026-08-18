import { useState } from "react";
import { validate } from "../validators";
import { sendOtpSchema, verifyOtpSchema } from "../validators/auth";
import { sentOtp, verifyOtp } from "../services/auth.service";
import { useNavigate } from "react-router";
import { toast } from "sonner";


const UseAuth = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [hasSentOtp, setHasSentOtp] = useState(false);
  const navigate = useNavigate()

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)
    
  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => setOtp(e.target.value)


 const handleSendPhone = async () => {
    if(!validate(sendOtpSchema, {phone})) return;
   const res = await sentOtp(phone)
   console.log(res);
   
    setHasSentOtp(true)
 }
 const handleSendOtp = async () => {
    if(!validate(verifyOtpSchema, {phone, otp})) return;

    const res = await verifyOtp(phone, otp) 
    return res;
    
 }

 const login = async () => {
    const response = await handleSendOtp()
    if(!response) return

    toast.success("You have logged in successfully")
    navigate("/")
    
 }





 const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
        if(hasSentOtp){
           await login()
        }else{
         await handleSendPhone() 
        }
        
    } catch (error) {
        console.log(error);   
    }
 }

  

 return {phone, otp, hasSentOtp, handlePhoneChange, handleOtpChange, handleSubmit}
}

export default UseAuth;