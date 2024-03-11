import { Email as EmailType } from "@/app/types/email-types";
import Email from "../../molecules/Email/Email";
import styles from "./Emails.module.scss";
import { useMemo } from "react";

export default async function Emails({ emails }: { emails: EmailType[] }) {
  const emailsComponent = useMemo(() => {
    return emails.map((email, index) => (
      <Email key={`${email.sender.name}-${index}`} email={email} />
    ));
  }, []);

  return <div className={styles.emailsContainer}>{emailsComponent}</div>;
}
