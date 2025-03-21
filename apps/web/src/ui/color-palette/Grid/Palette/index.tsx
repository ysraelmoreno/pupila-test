import { Card, Tag } from "@brand-zone/ui";
import { ColorPalette } from "../../../../interface/colorPalette.interface";
import styles from "./styles.module.scss";
import { useState } from "react";
import { useColorPalettes } from "../../../../context/colorPalettes.context";
import { EditPalette } from "./EditPalette";
import * as VisualCard from "../../../../components/VisualCard";

export type ColorPaletteProps = ColorPalette;

export const ColorPaletteCard = ({
  colors,
  description,
  group,
  tags,
  id,
  name,
}: ColorPaletteProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { editColorPalette, deleteColorPalette } = useColorPalettes();

  return (
    <>
    <VisualCard.Root>
      <VisualCard.Head>
        <div className={styles.colorsContainer}>
          {[...colors].map((color, i) => (
            <div
              key={`${color.id}-${color}-${i}`}
              style={{
                backgroundColor: color.color,
              }}
              className={styles.color}
            ></div>
          ))}
        </div>
        <div className={styles.editButtonContainer}>
        <EditPalette
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onActionClick={(palette) => editColorPalette(palette)}
          palette={{
            colors,
            description,
            group,
            id,
            name,
            tags,
          }}
        />
        </div>
      </VisualCard.Head>
      <VisualCard.Content name={name} onDelete={() => deleteColorPalette(Number(id))} />
      <VisualCard.Subtitle>
      <div className={styles.textContainer}>
        <span>{colors.length} {colors.length > 1 ? "colors" : "color"}</span>
        <p>{description}</p>
      </div>
      </VisualCard.Subtitle>
      <div className={styles.tags}>
        <VisualCard.Tags tags={tags?.slice(0, 3)} />
        {tags.length > 3 && <span>+ {tags.length - 3} tags</span>}
      </div>
    </VisualCard.Root>
    </>
  );
};
