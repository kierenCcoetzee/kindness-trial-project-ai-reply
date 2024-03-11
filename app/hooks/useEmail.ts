import { useState } from "react";
import { emailController } from "../utils/controllers/emailController";

export default function useEmail() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const emailControllerApi = emailController();

  return {
    ...emailControllerApi,
    setIsActive,
  };
}
