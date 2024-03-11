import MenuButton from "../../atoms/MenuButton/MenuButton";
import styles from "./MenuBar.module.scss";
import { useCurrentEditor } from "@tiptap/react";
import {
  faBold,
  faItalic,
  faStrikethrough,
  faEraser,
  faParagraph,
  faHeading,
  faListUl,
  faListOl,
  faQuoteLeft,
  faMinus,
  faRotateLeft,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";

export default function MenuBar() {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <div className={styles.menuBar}>
      <MenuButton
        callback={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        isActive={editor.isActive("bold")}
        icon={faBold}
      />
      <MenuButton
        callback={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        isActive={editor.isActive("italic")}
        icon={faItalic}
      />
      <MenuButton
        callback={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        isActive={editor.isActive("strike")}
        icon={faStrikethrough}
      />
      <MenuButton
        callback={() => editor.chain().focus().unsetAllMarks().run()}
        icon={faEraser}
      />
      <MenuButton
        callback={() => editor.chain().focus().setParagraph().run()}
        isActive={editor.isActive("paragraph")}
        icon={faParagraph}
      />
      <MenuButton
        callback={() =>
          editor.chain().focus().toggleHeading({ level: 1 }).run()
        }
        isActive={editor.isActive("heading", { level: 1 })}
        icon={faHeading}
      />
      <MenuButton
        callback={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive("bulletList")}
        icon={faListUl}
      />
      <MenuButton
        callback={() => editor.chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive("orderedList")}
        icon={faListOl}
      />
      <MenuButton
        callback={() => editor.chain().focus().toggleBlockquote().run()}
        isActive={editor.isActive("blockquote")}
        icon={faQuoteLeft}
      />
      <MenuButton
        callback={() => editor.chain().focus().setHorizontalRule().run()}
        icon={faMinus}
      />
      <MenuButton
        callback={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        icon={faRotateLeft}
      />
      <MenuButton
        callback={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        icon={faRotateRight}
      />
    </div>
  );
}
