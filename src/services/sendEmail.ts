
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";



const SERVICE_ID = "service_rwiuc33";
const TEMPLATE_ID = "template_hi8xlka";
const PUBLIC_KEY = "sbKSEM3yamgfloOrv";


export default async function sendEmail(params: Record<string, unknown>) {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      params,
      PUBLIC_KEY
    );
    return response;
  } catch (error) {
    console.error("EmailJS error:", error);
    toast.error("Сталася помилка при надсиланні. Спробуйте пізніше.");
    return false;
  }
}
