import { Button, Card, Input, Modal, Variant } from "@brand-zone/ui";
import { useState } from "react";
import styles from "./styles.module.scss";

export interface CreateGroupModalPros {
  trigger: React.ReactNode;
  title: string;
  onCancel?: () => void;
  onActionClick?: (payload: { name: string }) => void;
  triggerVariant?: Variant;
}

export const CreateGroupModal = ({
  trigger,
  title,
  onActionClick,
  onCancel,
  triggerVariant,
}: CreateGroupModalPros) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");

  return (
    <Modal
      trigger={trigger}
      triggerVariant={triggerVariant}
      onTriggerClick={() => setIsOpen(true)}
      isOpen={isOpen}
    >
      <Card className={styles.card}>
        <h2>{title}</h2>
        <Input
          placeholder="Insert a group name."
          onChange={(event) => setName(event.target.value)}
        />
        <div className={styles.actionButtons}>
          <Button
            variant="secondary"
            onClick={() => {
              setIsOpen(false);
              setName("");

              if (onCancel) {
                onCancel();
              }
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              if (onActionClick)
                onActionClick({
                  name,
                });

              setIsOpen(false);
              setName("");
            }}
          >
            Create a group
          </Button>
        </div>
      </Card>
    </Modal>
  );
};
