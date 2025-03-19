import React, { useRef, useState } from "react";
import { Button, Input } from "@brand-zone/ui";
import { SliderIcon, ArchiveIcon, PlusIcon } from "@radix-ui/react-icons";
import styles from "./styles.module.scss";
import { AddModal } from "../AddModal";
import { useDebouncedCallback } from "use-debounce";
import { useVisualReferences } from "../../../context/visualReference.context";
import { VisualReference } from "../../../interface/visualReference.interface";
import { Filters } from "../Filters";

export const Tools = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const {
    addReference,
    availableFilters,
    setCurrentFilters,
    currentFilters,
    groups,
  } = useVisualReferences();

  const inputRef = useRef<HTMLInputElement>(null);

  const debounced = useDebouncedCallback((value: string) => {
    setCurrentFilters({
      ...currentFilters,
      search: value,
    });
  }, 500);

  return (
    <div>
      <div className={styles.toolsContainer}>
        <div className={styles.inputContainer}>
          <Input
            placeholder="Search a image"
            ref={inputRef}
            onChange={(event) => {
              debounced(event.target.value);
            }}
          />
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
        </div>

        <div className={styles.iconContainer}>
          <Button
            variant="ghost"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            disabled={!availableFilters.length}
          >
            <SliderIcon />
          </Button>
          <Button variant="ghost">
            <ArchiveIcon />
          </Button>
        </div>
      </div>
      <Filters
        isOpen={isFiltersOpen}
        onFilter={(currentFilters) => {
          console.log(currentFilters);
        }}
      />
    </div>
  );
};
