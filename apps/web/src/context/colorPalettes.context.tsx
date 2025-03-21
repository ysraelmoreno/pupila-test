"use client";
import {
  createContext,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ColorPalette } from "../interface/colorPalette.interface";
import colorPalettesService from "../service/api/colorPalettes.service";
import { Group } from "../interface/visualReference.interface";
import groupsService from "../service/api/groups.service";
import { CurrentFilters } from "./visualReference.context";

export interface ColorPalettesContextProps {
  palettes: ColorPalette[];
  setPalettes: React.Dispatch<SetStateAction<ColorPalette[]>>;
  handlePaletteCreation: (palette: ColorPalette) => void;
  createGroup: (name: string) => void;
  groups: Group[];
  editColorPalette: (palette: ColorPalette) => void;
  availableFilters: string[];
  currentFilters: CurrentFilters;
  setCurrentFilters: (filters: CurrentFilters) => void;
  deleteGroup: (id: string) => void;
  deleteColorPalette: (id: number) => void;
}

export const ColorPalettesContext = createContext<ColorPalettesContextProps>(
  {} as ColorPalettesContextProps
);

export const ColorPalettesProvider = ({ children }: PropsWithChildren) => {
  const [palettes, setPalettes] = useState<ColorPalette[]>([]);
  const [groups, setGroups] = useState<Group[]>([]);
  const [currentFilters, setCurrentFilters] = useState<CurrentFilters>(
    {} as CurrentFilters
  );

  const availableFilters = useMemo(() => {
    const tagsSet = [
      ...new Set(palettes?.flatMap((palette) => palette.tags)),
    ];

    return tagsSet;
  }, [palettes]);

  const handlePaletteCreation = (palette: ColorPalette) => {
    const newPalettes = colorPalettesService.createPalette(palette);

    setPalettes(newPalettes);
  };

  const editColorPalette = (newPalette: ColorPalette) => {
    const editedPalette = colorPalettesService.editPalette(newPalette);

    setPalettes([...editedPalette]);
  };


  const deleteColorPalette = (id: number) => {
    const filteredPalettes = colorPalettesService.deletePalette(id);

    setPalettes(filteredPalettes);
  };

  const createGroup = (group: string) => {
    const createdGroup = groupsService.createGroup(
      {
        name: group,
      },
      "colorPalettesGroup"
    );

    setGroups(createdGroup);
  };

  useEffect(() => {
    const localGroups = colorPalettesService.getPaletteGroups();
    const localPalettes = colorPalettesService.getPalettes();

    setGroups(localGroups);
    setPalettes(localPalettes);
  }, []);

  
  const colorPalettesFormatted = useMemo(() => {
    const filteredByTags: ColorPalette[] = palettes
      .map((palette) => {
        const containAnyTag = palette?.tags?.some((tag) =>
          currentFilters?.tags?.length > 0
            ? currentFilters.tags.includes(tag)
            : true
        );

        if (!containAnyTag) {
          return false;
        }

        return palette;
      })
      .filter(Boolean) as ColorPalette[];

    const filteredByText = filteredByTags.filter((reference) => {
      if (currentFilters?.search === "" || !currentFilters?.search) {
        return true;
      }

      return (
        reference?.name
          ?.toLowerCase()
          .includes(currentFilters?.search.toLowerCase()) ||
        reference?.description
          ?.toLowerCase()
          .includes(currentFilters?.search?.toLowerCase())
      );
    });

    return filteredByText;
  }, [palettes, currentFilters]);

  const deleteGroup = (id: string) => {
    groupsService.deleteGroup("colorPalettesGroup", id);

    setGroups(groups.filter((group) => group.id !== id));
  };

  return (
    <ColorPalettesContext.Provider
      value={{
        palettes: colorPalettesFormatted,
        setPalettes,
        handlePaletteCreation,
        createGroup,
        groups,
        editColorPalette,
        availableFilters,
        currentFilters,
        setCurrentFilters,
        deleteGroup,
        deleteColorPalette,
      }}
    >
      {children}
    </ColorPalettesContext.Provider>
  );
};

export const useColorPalettes = () => {
  const context = useContext(ColorPalettesContext);

  return context;
};
