"use client";

import { Email as EmailType } from "@/app/types/email-types";
import styles from "./Email.module.scss";
import useEmail from "@/app/hooks/useEmail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { EmailTag } from "@/app/types/email-tag-types";
import Tag from "../../atoms/Tag/Tag";
import Reply from "../Reply/Reply";

export default function Email({ email }: { email: EmailType }) {
  const { isActive, setIsActive } = useEmail();

  // will be moved to open ai response in parent
  const tags: EmailTag[] = [
    { tagString: "upset" },
    { tagString: "happy" },
    { tagString: "angry" },
  ];

  return (
    <div className={styles.emailContainer}>
      <div
        className={styles.senderWrapper}
        onClick={() => setIsActive(!isActive)}
      >
        <p className={styles.sender}>
          <FontAwesomeIcon icon={faCircleUser} />
          {email.sender.name}
        </p>
        <p className={styles.subject}>{email.subject}</p>
        <p className={styles.message}>{email.message}</p>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <Tag key={tag.tagString} tag={tag} />
          ))}
        </div>
      </div>
      <Reply />
    </div>
  );
}
