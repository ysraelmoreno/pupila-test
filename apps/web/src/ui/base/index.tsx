import React, { PropsWithChildren } from "react";
import { Menu } from "../../components/Menu";
import styles from "./styles.module.scss";

export const Base = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.screen}>
      <Menu />
      <div className={styles.page}>{children}</div>
    </div>
  );
};
