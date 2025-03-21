import { Card, Input, TextArea, Button, Tag, Select } from "@brand-zone/ui";
import styles from "./styles.module.scss";
import { PlusIcon } from "@radix-ui/react-icons";
import { HexColorPicker } from "react-colorful";
import { ColorSelector } from "../Header/Color";
import { useCallback, useRef, useState } from "react";
import { Color, ColorPalette } from "../../../interface/colorPalette.interface";
import { useColorPalettes } from "../../../context/colorPalettes.context";

export interface CreateColorPaletteModalProps {
  handleIsOpenModal: (state: boolean) => void;
  palette?: ColorPalette;
  onActionClick: (palette: ColorPalette) => void;
  actionText?: string;
}

export const CreateColorPaletteModalContent = ({
  handleIsOpenModal,
  palette,
  onActionClick,
  actionText,
}: CreateColorPaletteModalProps) => {
  const [newColors, setNewColors] = useState<Color[]>(palette && palette.colors ? [...palette.colors] : []);
  const [color, setColor] = useState("#000000");
  const [name, setName] = useState(palette?.name ?? "");
  const [description, setDescription] = useState(palette?.description ?? "");
  const [tags, setTags] = useState<string[]>(palette?.tags ?? []);
  const [tag, setTag] = useState("");
  const [group, setGroup] = useState(palette?.group ?? "");
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const tagRef = useRef<HTMLInputElement>(null);

  const { groups } = useColorPalettes()
  
  const handleCreateColor = () => {
    setNewColors([
      ...newColors,
      {
        id: Math.random() * 100,
        color,
      },
    ]);

    setIsPaletteOpen(false);
  };

  const handleActionClick = useCallback(() => {
    onActionClick({
      colors: newColors,
      description,
      id: palette?.id ?? Math.random() * 100,
      name,
      group,
      tags,
    });

    handleIsOpenModal(false);
  }, [
    onActionClick,
    newColors,
    description,
    palette?.id,
    name,
    tags,
    group,
    handleIsOpenModal,
  ]);

  return (
    <Card className={styles.card}>
      <div className={styles.titleContainer}>
        <h3>Create a color palette</h3>
        <div className={styles.addColorContainer}>
          <Button
            variant="ghost"
            onClick={() => setIsPaletteOpen(!isPaletteOpen)}
          >
            <PlusIcon />
          </Button>
          {isPaletteOpen && (
            <div className={styles.colorPickerContainer}>
              <Card className={styles.card}>
                <HexColorPicker onChange={(color) => setColor(color)} />
                <Button onClick={() => handleCreateColor()}>Add</Button>
              </Card>
            </div>
          )}
        </div>
      </div>
      {newColors?.length > 0 && (
        <div className={styles.colors}>
          {newColors?.map((color) => (
            <ColorSelector
              onColorChange={(newColor, id) => {
                setNewColors(prevColors => 
                  prevColors.map(colorItem => 
                    colorItem.id === id 
                      ? { ...colorItem, color: newColor }
                      : colorItem
                  )
                );
              }}
              color={color.color}
              id={color.id}
              key={`${color.color}-${Math.random()}-${color.id}`}
            />
          ))}
        </div>
      )}
      <div className={styles.inputContainers}>
        <div>
        <Input
          placeholder="Insert a name of your palette"
          defaultValue={palette?.name}
          onChange={(event) => setName(event.target.value)}
        />
        <Select
          onOptionSelect={(option) => setGroup(option)}
          options={groups.map((group) => group.name)}
        />
        </div>
        <TextArea
          placeholder="Insert a description for your palette"
          defaultValue={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <div className={styles.tagsContainer}>
          <Input
            placeholder="Add tags"
            ref={tagRef}
            onChange={(event) => {
              setTag(event.target.value);
            }}
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                if (!tag) return;

                setTags([...tags, tag]);

                if (tagRef.current) {
                  setTag("");
                  tagRef.current.value = "";
                }
              }
            }}
          />
          <div className={styles.tags}>
            {tags?.map((singleTag, i) => (
              <Tag className={styles.tag} key={`${singleTag}-${i}`}>
                {singleTag}
                <Button
                  className={styles.removeTagButton}
                  variant="ghost"
                  onClick={() => {
                    setTags(tags.filter((tag) => tag !== singleTag));
                  }}
                >
                  X
                </Button>
              </Tag>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <Button variant="secondary" onClick={() => handleIsOpenModal(false)}>
          Cancel
        </Button>
        <Button
          variant="primary"
          disabled={!newColors.length}
          onClick={() => handleActionClick()}
        >
          {actionText ? actionText : "Create Color Palette"}
        </Button>
      </div>
    </Card>
  );
};
