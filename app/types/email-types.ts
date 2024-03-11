import { Persona } from "./persona-types";

export type Email = {
  sender: Persona;
  receiver: Persona;
  subject: string;
  message: string;
  replies: Email[];
};
