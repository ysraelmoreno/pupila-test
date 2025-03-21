import { Button } from "@brand-zone/ui";
import { TrashIcon } from "@radix-ui/react-icons";
import styles from "./styles.module.scss";

export interface VisualCardContentProps {
    name: string;
    onDelete: () => void;
}

export const Content = ({ name, onDelete }: VisualCardContentProps) => {
    return (
        <div className={styles.nameAction}>
        <h3>{name}</h3>
        <Button
          variant="ghost"
          onClick={onDelete}
        >
          <TrashIcon />
        </Button>
      </div>
    )
}