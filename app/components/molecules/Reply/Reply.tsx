import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import styles from "./Reply.module.scss";
import MenuBar from "../MenuBar/MenuBar";

const extensions = [
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
];

export default () => {
  const handleOnUpdate = ({ editor }: any) => {
    // console.log(editor.getText());
  };
  return (
    <div className={styles.replyWrapper}>
      <EditorProvider
        slotBefore={<MenuBar />}
        extensions={extensions}
        onUpdate={handleOnUpdate}
      >
        {null}
      </EditorProvider>
    </div>
  );
};
