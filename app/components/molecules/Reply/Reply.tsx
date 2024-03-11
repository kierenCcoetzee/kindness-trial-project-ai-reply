"use client";

import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useState } from "react";
import styles from "./Reply.module.scss";
import MenuBar from "../MenuBar/MenuBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";

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

export default function Reply({ defaultReply }: { defaultReply: string }) {
  const [edited, setEdited] = useState<boolean>(false);
  return (
    <div className={styles.replyWrapper}>
      <EditorProvider
        slotBefore={<MenuBar />}
        extensions={extensions}
        content={defaultReply}
        onUpdate={() => setEdited(true)}
      >
        {null}
      </EditorProvider>
      {!edited && (
        <p className={styles.aiNotice}>
          <FontAwesomeIcon
            icon={faWandMagicSparkles}
            style={{ fontSize: "12px" }}
          />
          This is an AI generated reply, feel free to edit the above or refresh
          the page for a different response
        </p>
      )}
    </div>
  );
}
