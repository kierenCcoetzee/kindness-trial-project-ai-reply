import { Email as EmailType } from "@/app/types/email-types";
import styles from "./Email.module.scss";
import useEmail from "@/app/hooks/useEmail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Tag from "../../atoms/Tag/Tag";
import Reply from "../Reply/Reply";

export default async function Email({ email }: { email: EmailType }) {
  const { getTagsAndExampleReply } = useEmail();
  const tagsAndReply = await getTagsAndExampleReply({ email });

  return (
    <div className={styles.emailContainer}>
      <div className={styles.senderWrapper}>
        <p className={styles.sender}>
          <FontAwesomeIcon icon={faCircleUser} />
          {email.sender.name}
        </p>
        <p className={styles.subject}>{email.subject}</p>
        <p className={styles.message}>{email.message}</p>
        <div className={styles.tags}>
          {tagsAndReply.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      </div>
      <Reply defaultReply={tagsAndReply.reply} />
    </div>
  );
}
