"use client";
import { ColorPalettesProvider } from "../../context/colorPalettes.context";
import { ColorPalettesGrid } from "./Grid";
import { ColorPalettesHeader } from "./Header";
import styles from "./screen.module.scss";

export const ColorPaletteScreen = () => {
  return (
    <ColorPalettesProvider>
      <div className={styles.screen}>
        <ColorPalettesHeader />
        <ColorPalettesGrid />
      </div>
    </ColorPalettesProvider>
  );
};
