import styles from "./MenuButton.module.scss";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export default function MenuButton({
  callback,
  icon,
  isActive,
  disabled,
}: {
  callback: () => {};
  icon: FontAwesomeIconProps["icon"];
  isActive?: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      className={`${styles.menuButton} ${isActive ? styles.isActive : ""}`}
      disabled={disabled}
      onClick={callback}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}
