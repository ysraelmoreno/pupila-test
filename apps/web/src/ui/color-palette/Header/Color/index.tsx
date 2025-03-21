import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";

export interface ColorSelectorProps {
  color: string;
  id: number;
  onColorChange: (color: string, id: number) => void;
}

export const ColorSelector = ({
  color = "",
  id,
  onColorChange,
}: ColorSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<any>(null);

  return (
    <div className={styles.singleColor}>
      <div className={styles.colorContainer}>
        <div
          className={styles.color}
          onClick={() => setIsOpen(!isOpen)}
          style={{
            backgroundColor: color,
            height: "50px",
          }}
        ></div>
      </div>
      <div className={styles.colorPickerContainer}>
        {isOpen && (
          <div className={styles.colorSelectorContainer}>
            <HexColorPicker
              onChange={(newColor) => {
                clearTimeout(timeoutId);

                const timeout = setTimeout(() => {
                  setIsOpen(false);
                  onColorChange(newColor, id);
                }, 300);

                setTimeoutId(timeout);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
