import { ColorPalette } from "../../../../interface/colorPalette.interface";
import styles from "./styles.module.scss";
import { ColorPaletteCard } from "../Palette";

export interface ColorPalettesListProps {
  palettes: ColorPalette[];
}

export const ColorPalettesList = ({ palettes }: ColorPalettesListProps) => {
  return (
    <div className={styles.cardsContainer}>
      {palettes?.map((palette) => (
        <ColorPaletteCard key={palette.id} {...palette} />
      ))}
    </div>
  );
};
