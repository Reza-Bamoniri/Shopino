import axios from "axios";
import type { formType } from "../hooks/usContactUs";


const ApicontactUsMessage = async (form: formType) => {
  return axios.post("https://shopino.iran.liara.run/v1/contact-us",form)
}

export default ApicontactUsMessage;