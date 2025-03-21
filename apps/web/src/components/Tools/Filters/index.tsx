import { Tag } from "@brand-zone/ui";
import styles from "./styles.module.scss";
import { CurrentFilters } from "../../../context/visualReference.context";

export interface FiltersProps {
  isOpen: boolean;
  availableFilters: string[];
  currentFilters: CurrentFilters;
  onTagClick: (tags: CurrentFilters) => void;
}

export const Filters = ({
  isOpen,
  availableFilters,
  currentFilters,
  onTagClick,
}: FiltersProps) => {
  const handleAddtag = (tag: string) => {
    const filters = currentFilters;

    if (filters.tags?.includes(tag)) {
      const newFilter = {
        ...filters,
        tags: filters.tags.filter((filter) => filter !== tag),
      };

      onTagClick(newFilter);

      return;
    }

    onTagClick({
      ...filters,
      tags: [
        ...new Set([...(currentFilters?.tags ? currentFilters.tags : []), tag]),
      ],
    });
  };

  return isOpen && (
    <div
      className={`${styles.baseFiltersContainers} ${isOpen ? styles.isFiltersContainersOpen : ""}`}
      data-testid="filters-container"
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
  );
};

Filters.displayName = "Tools_Filters";
