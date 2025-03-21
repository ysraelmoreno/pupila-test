"use client";
import { CardsList } from "../../../components/CardsList";
import { useColorPalettes } from "../../../context/colorPalettes.context";
import { ColorPalettesList } from "./List";

export const ColorPalettesGrid = () => {
  const { groups, palettes, deleteGroup } = useColorPalettes();

  return (
    <CardsList groups={groups} onDeleteGroup={deleteGroup}>
      <ColorPalettesList palettes={palettes} />
      {groups.map((group) => (
        <ColorPalettesList key={group.id} palettes={palettes.filter((palette) => palette.group === group.name)} />
      ))}
    </CardsList>
  );
};
