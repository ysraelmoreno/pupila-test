import { ArchiveIcon, PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { CreateGroupModal } from "../../../components/CreateGroupModal";
import { Tools } from "../../../components/Tools";
import { Filters } from "../../../components/Tools/Filters";
import Utilities from "../../../components/Tools/Utilities";
import AddItemModal from "../../../components/Tools/AddItemModal";
import { useColorPalettes } from "../../../context/colorPalettes.context";
import { CreateColorPaletteModalContent } from "../CreateColorModal";
import { useDebouncedCallback } from "use-debounce";

export const ColorPalettesHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const { createGroup, handlePaletteCreation, availableFilters, currentFilters, setCurrentFilters } = useColorPalettes();

  const debounced = useDebouncedCallback((value: string) => {
    setCurrentFilters({
      ...currentFilters,
      search: value,
    })
  }, 500);

  return (
    <>
      <Tools onInputChange={(value) => {
        debounced(value)
      }}>
        <Utilities onFiltersClick={() => setIsFiltersOpen(!isFiltersOpen)} isFiltersDisabled={!availableFilters?.length}>
          <CreateGroupModal
            trigger={<ArchiveIcon />}
            title="Create a group name"
            triggerVariant="ghost"
            onActionClick={(group) => {
              createGroup(group.name);
            }}
          />
        </Utilities>
        <AddItemModal
          isOpen={isOpen}
          trigger={<PlusIcon />}
          onTriggerClick={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
        >
          <CreateColorPaletteModalContent
            handleIsOpenModal={setIsOpen}
            onActionClick={(palette) =>
              handlePaletteCreation({
                ...palette,
              })
            }
          />
        </AddItemModal>
        <Filters
          isOpen={isFiltersOpen}
          availableFilters={availableFilters}
          currentFilters={currentFilters}
          onTagClick={setCurrentFilters}
        />
      </Tools>
    </>
  );
};
