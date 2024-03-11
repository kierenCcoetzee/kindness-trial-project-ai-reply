import { Email as EmailType } from "@/app/types/email-types";
import Email from "../../molecules/Email/Email";
import styles from "./Emails.module.scss";

export default function Emails({ emails }: { emails: EmailType[] }) {
  return (
    <div className={styles.emailsContainer}>
      {emails.map((email) => (
        <Email email={email} />
      ))}
    </div>
  );
}