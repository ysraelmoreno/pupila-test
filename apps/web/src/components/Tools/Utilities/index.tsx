import { Button } from "@brand-zone/ui";
import { SliderIcon } from "@radix-ui/react-icons";
import styles from "./styles.module.scss";
import { PropsWithChildren } from "react";

export interface IUtilitiesProps {
  onFiltersClick: () => void;
  isFiltersDisabled: boolean;
}

const Utilities = ({
  onFiltersClick,
  isFiltersDisabled,
  children,
}: PropsWithChildren<IUtilitiesProps>) => {
  return (
    <div className={styles.iconContainer}>
      <Button
        variant="ghost"
        onClick={onFiltersClick}
        className={styles.filtersTrigger}
        disabled={isFiltersDisabled}
      >
        Filters
        <SliderIcon />
      </Button>
      {children}
    </div>
  );
};

Utilities.displayName = "Tools_Utilities";

export default Utilities;
