import { useRef, useState } from "react";
import { useVisualReferences } from "../../../context/visualReference.context";
import { useDebouncedCallback } from "use-debounce";
import Utilities from "../../../components/Tools/Utilities";
import { CreateGroupModal } from "../../../components/CreateGroupModal";
import { ArchiveIcon, PlusIcon } from "@radix-ui/react-icons";
import AddModal from "../AddModal";
import { VisualReference } from "../../../interface/visualReference.interface";
import { Filters } from "../../../components/Tools/Filters";
import { Tools } from "../../../components/Tools";

export const VisualReferenceHeader = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    addReference,
    availableFilters,
    setCurrentFilters,
    currentFilters,
    groups,
    createGroup,
  } = useVisualReferences();

  const debounced = useDebouncedCallback((value: string) => {
    setCurrentFilters({
      ...currentFilters,
      search: value,
    });
  }, 500);

  return (
    <Tools
      onInputChange={(value) => {
        debounced(value);
      }}
    >
      <AddModal
        trigger={<PlusIcon />}
        groups={groups}
        onTriggerClick={() => {
          if (inputRef.current) {
            inputRef.current.value = "";
          }
        }}
        onActionClick={(reference: VisualReference) => {
          addReference(reference);
        }}
      />
      <Utilities
        onFiltersClick={() => setIsFiltersOpen(!isFiltersOpen)}
        isFiltersDisabled={!availableFilters.length}
      >
        <CreateGroupModal
          trigger={<ArchiveIcon />}
          title="Create a group name"
          triggerVariant="ghost"
          onActionClick={(group) => createGroup(group)}
        />
      </Utilities>

      <Filters
        isOpen={isFiltersOpen}
        availableFilters={availableFilters}
        currentFilters={currentFilters}
        onTagClick={setCurrentFilters}
      />
    </Tools>
  );
};
