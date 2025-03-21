import React, { useRef } from "react";
import { Input } from "@brand-zone/ui";
import styles from "./styles.module.scss";
import { ChildWithDisplayName } from "../../interface/react.interface";

export interface ToolsProps {
  onInputChange: (value: string) => void;
  children: ChildWithDisplayName[];
}

export const Tools = ({ onInputChange, children }: ToolsProps) => {
  const inputRef = useRef(null);

  const getByDisplayName = (displayName: string) => {
    return children.find((child) => child.type.displayName === displayName);
  };

  return (
    <div>
      <div className={styles.toolsContainer}>
        <div className={styles.inputContainer}>
          <Input
            placeholder="Search a image"
            ref={inputRef}
            onChange={(event) => {
              onInputChange(event.target.value);
            }}
          />
          {getByDisplayName("Tools_AddButton")}
        </div>

        <div className={styles.iconContainer}>
          {getByDisplayName("Tools_Utilities")}
        </div>
      </div>
      {getByDisplayName("Tools_Filters")}
    </div>
  );
};
