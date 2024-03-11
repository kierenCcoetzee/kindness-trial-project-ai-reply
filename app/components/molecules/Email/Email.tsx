"use client";

import { Email as EmailType } from "@/app/types/email-types";
import styles from "./Email.module.scss";
import useEmail from "@/app/hooks/useEmail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { EmailTag } from "@/app/types/email-tag-types";
import Tag from "../../atoms/Tag/Tag";

export default function Email({ email }: { email: EmailType }) {
  const { setIsActive } = useEmail();
  const tags: EmailTag[] = [
    { tagString: "upset" },
    { tagString: "happy" },
    { tagString: "angry" },
  ];

  return (
    <div className={styles.emailContainer}>
      <p className={styles.sender}>
        <FontAwesomeIcon icon={faCircleUser} />
        {email.sender.name}
      </p>
      <p className={styles.subject}>{email.subject}</p>
      <p className={styles.message}>{email.message}</p>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <Tag tag={tag} />
        ))}
      </div>
    </div>
  );
}
