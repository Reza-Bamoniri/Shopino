import { useContext, useState } from "react";
import { validate } from "../validators";
import { sendOtpSchema, verifyOtpSchema } from "../validators/auth";
import { sentOtp, verifyOtp } from "../services/auth.service";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import UseTimer from "./UseTimer";
import AuthContext from "../context/AuthContext";



const UseAuth = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [hasSentOtp, setHasSentOtp] = useState(false);
  const navigate = useNavigate();
  const { isExpired, restart, timerUi } = UseTimer(120)
  const result = useContext(AuthContext)


  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)
    
  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => setOtp(e.target.value)


 const handleSendPhone = async () => {
    if(!validate(sendOtpSchema, {phone})) return;
   const res = await sentOtp(phone)
   console.log(res);
   
    setHasSentOtp(true)
    restart()
 }
 const handleResendPhone = async () => {
   const res = await sentOtp(phone)
   console.log(res);
   toast.warning("The new code has been sent.")
   restart()
   setOtp("")
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
    result?.refreshUser()
    
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

  

 return {phone, otp, hasSentOtp, handlePhoneChange, handleOtpChange, handleSubmit, handleResendPhone, timerUi, isExpired}
}

export default UseAuth;