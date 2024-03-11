import { emailController } from "../utils/controllers/emailController";

export default function useEmail() {
  const emailControllerApi = emailController();

  return emailControllerApi;
}
