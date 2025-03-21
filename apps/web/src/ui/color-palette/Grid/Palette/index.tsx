import { Card, Tag } from "@brand-zone/ui";
import { ColorPalette } from "../../../../interface/colorPalette.interface";
import styles from "./styles.module.scss";
import { useState } from "react";
import { useColorPalettes } from "../../../../context/colorPalettes.context";
import { EditPalette } from "./EditPalette";

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

  const { editColorPalette } = useColorPalettes();

  return (
    <Card className={styles.card}>
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
      <div className={styles.textContainer}>
        <div className={styles.nameContainer}>
          <h3>{name}</h3>
        </div>
        <span>{colors.length} colors</span>
        <p>{description}</p>
      </div>
      <div className={styles.tags}>
        <div className={styles.tagContainer}>
          {tags
            ?.slice(0, 2)
            .map((tag, i) => <Tag className={styles.tag} key={`${tag}-${i}`}>{tag}</Tag>)}
        </div>
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
    </Card>
  );
};
