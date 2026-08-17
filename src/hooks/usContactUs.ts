import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

import { validate } from "../validators";
import { contactUsSchema } from "../validators/contactUs";
import ApicontactUsMessage from "../services/contactUs.service";

export type formType = {  name: "", subject: "", phone: "", content: ""}


const UsContactUs = (initialForm: formType) => {
  const [form, setForm] = useState<formType>(initialForm);

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
       e.preventDefault()

      if(!validate(contactUsSchema, form)) return;
       



       setIsSubmitting(true)
       try {
        
        const response = await ApicontactUsMessage(form)
        
        
        if(response.data.status === 201){
          toast.success('Message sent successfully.') 
        }

       } catch (error) {
        if (axios.isAxiosError(error)) {

       if(error.response?.status === 400){
          toast.error("Failed to send the message.")
        }
      console.log("Status:", error.response?.status);
      console.log("Response:", error.response?.data);
    }else {
    toast.error("An unexpected error occurred.");
   }    
    }
    setIsSubmitting(false)
     setForm(initialForm)
  }

  return {isSubmitting, form, handleChangeInput, handleSubmit}
}

export default UsContactUs;