import { Tag } from "@brand-zone/ui";
import styles from "./styles.module.scss";
import { useVisualReferences } from "../../../context/visualReference.context";

export interface FiltersProps {
  isOpen: boolean;
}

export const Filters = ({ isOpen }: FiltersProps) => {
  const { availableFilters, currentFilters, setCurrentFilters } =
    useVisualReferences();

  const handleAddtag = (tag: string) => {
    const filters = currentFilters;

    if (filters.tags?.includes(tag)) {
      const newFilter = {
        ...filters,
        tags: filters.tags.filter((filter) => filter !== tag),
      };

      setCurrentFilters(newFilter);

      return;
    }

    setCurrentFilters({
      ...filters,
      tags: [
        ...new Set([...(currentFilters?.tags ? currentFilters.tags : []), tag]),
      ],
    });
  };

  return (
    isOpen && (
      <div
        className={`${styles.baseFiltersContainers} ${isOpen ? styles.isFiltersContainersOpen : ""}`}
      >
        {availableFilters?.map((filter) => (
          <Tag
            key={filter}
            onClick={() => {
              handleAddtag(filter);
            }}
            className={`${styles.tag} ${currentFilters.tags?.includes(filter) ? styles.isSelected : ""}`}
          >
            {filter}
          </Tag>
        ))}
      </div>
    )
  );
};
