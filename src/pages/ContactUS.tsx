import { useState } from "react"
import { Link } from "react-router"
import axios from "axios"
import { toast } from "sonner"

import SectionTitle from "../components/common/SectionTitle"
import InputField from "../components/common/InputField"
import contactUs from "../assets/images/contactus.jpg"




const ContactUS = () => {

  const [form, setForm] = useState({"name": "","phone": "","subject": "","content": ""});

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
       e.preventDefault()
       setIsSubmitting(true)
       try {
        console.log(form);
        const response = await axios.post("https://shopino.iran.liara.run/v1/contact-us",form)
        
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
     setForm({"name": "","phone": "","subject": "","content": "" })
  }


  return (
    <main className="my-20 container" id="contact-us">
          <SectionTitle
            text="Contact Us"
            description="Contact us through the form below, and the Shapino technical team will get back to you as soon as possible."
          />
    
          <div
            id="contact-area"
            className="grid grid-cols-2 gap-10 p-5 border rounded-3xl border-neutral-300 mt-10"
          >
            <div className="w-full">
              <p className="mb-10 text-sm text-neutral-600">
               Dear user, for better assistance, please complete all the fields below.
              </p>
              <div className="grid grid-cols-2 gap-5 **:w-full">
                <InputField
                  placeholder="Example: Alex Anderson"
                  label="Full Name"
                  value={form.name}
                  name="name"
                  onChange={handleChangeInput}
                />
                <InputField placeholder="Example: 09911...."
                 label="Phone Number" 
                 value={form.phone}
                 name="phone"
                 onChange={handleChangeInput}
                 maxLength={11}
                 type="text"
                 inputMode="numeric"
                 />
    
                
                <InputField
                  type="text"
                  placeholder="Example: Return the Product"
                  fullWidth
                  label="Subject"
                  value={form.subject}
                  name="subject"
                  onChange={handleChangeInput}
                />

                <div className="col-span-2">
                  <label
                    htmlFor="contact-message"
                    className="text-xs select-none text-neutral-500"
                  >
                   Content:
                  </label>
                  <textarea
                    id="contact-message"
                    className="h-10 rounded-md mt-2.5 border text-sm py-4 min-h-35 border-neutral-200 ring-offset-2 px-4 duration-150 focus-within:ring-4 ring-sky-400/40 focus-within:outline-none"
                    placeholder="Example: I would like to return the product with ID #114334."
                    value={form.content}
                    name="content"
                    onChange={handleChangeInput}
                    
                  ></textarea>
                </div>
              </div>
    
              <div className="flex items-center text-sm mt-10 justify-end gap-3">
                <Link to="/" className="text-red-600 px-4 underline cursor-pointer">
                 Cancel
                </Link>
    
                <button disabled={isSubmitting} onClick={handleSubmit} className={`${isSubmitting ? "opacity-50 cursor-not-allowed" : ""} bg-linear-to-t from-blue-600 px-4 py-2.5 rounded-md text-white cursor-pointer hover:opacity-90 focus-within:ring-4 ring-sky-300/50 ring-offset-2 duration-150 to-blue-400 max-w-max `}>
                 {isSubmitting ? "Sending..." : "Send"}
                </button>
              </div>
            </div>
            <div className="w-full">
              <img
                className="object-cover scale-80"
                src={contactUs}
              />
            </div>
          </div>
          <div className="space-y-10 my-10">
            <SectionTitle
              text="In-Person Visit"
              description="You can visit one of Shapino’s official offices in person and get in touch with our team."
            />
    
            {/* <Maps /> */}
          </div>
        </main>
  )
}

export default ContactUS