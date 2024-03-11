import { EmailTag } from "@/app/types/email-tag-types";
import styles from "./Tag.module.scss";

export default function Tag({ tag }: { tag: EmailTag }) {
  return <div className={styles.tag}>{tag.tagString}</div>;
}
