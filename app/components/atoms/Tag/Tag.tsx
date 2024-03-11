import styles from "./Tag.module.scss";

export default function Tag({ tag }: { tag: string }) {
  return <div className={styles.tag}>{tag}</div>;
}
