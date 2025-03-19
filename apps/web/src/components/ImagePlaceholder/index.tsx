import React from "react";
import { ImageIcon } from "@radix-ui/react-icons";
import styles from "./styles.module.scss";

export const ImagePlaceholder = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <div className={styles.imagePlaceholder}>
      <ImageIcon />
      {children}
    </div>
  );
};
