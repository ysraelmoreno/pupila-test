import { Card, Modal } from "@brand-zone/ui";
import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

export interface AddItemModalProps {
  isOpen: boolean;
  onTriggerClick: () => void;
  onClose: () => void;
  trigger: React.ReactNode;
}

const AddItemModal = ({
  isOpen,
  children,
  trigger,
  onTriggerClick,
  onClose,
}: PropsWithChildren<AddItemModalProps>) => {
  return (
    <Modal
      isOpen={isOpen}
      onTriggerClick={() => {
        if (onTriggerClick) {
          onTriggerClick();
        }
      }}
      onClose={onClose}
      trigger={trigger}
    >
      {children}
    </Modal>
  );
};

AddItemModal.displayName = "Tools_AddButton";

export default AddItemModal;
