import { Pencil1Icon } from "@radix-ui/react-icons";
import AddItemModal from "../../../../../components/Tools/AddItemModal";
import { CreateColorPaletteModalContent } from "../../../CreateColorModal";
import { ColorPalette } from "../../../../../interface/colorPalette.interface";

export interface EditPaletteProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onActionClick: (palette: ColorPalette) => void;
  palette: ColorPalette;
}

export const EditPalette = ({
  isOpen,
  setIsOpen,
  onActionClick,
  palette,
}: EditPaletteProps) => {
  return (
    <AddItemModal
      isOpen={isOpen}
      trigger={<Pencil1Icon />}
      onTriggerClick={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
    >
      <CreateColorPaletteModalContent
        handleIsOpenModal={setIsOpen}
        onActionClick={(palette) => onActionClick(palette)}
        actionText="Update Color Palette"
        palette={palette}
      />
    </AddItemModal>
  );
};
