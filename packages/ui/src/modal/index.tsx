import * as Dialog from "@radix-ui/react-dialog";
import { VisuallyHidden } from "radix-ui";
import { PropsWithChildren } from "react";
import { Content, Overlay, Trigger } from "./styles";
import { Variant } from "../interfaces/styles.interface";

export interface ModalProps {
  trigger: React.ReactNode;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  isOpen?: boolean;
  onTriggerClick?: () => void;
  onClose?: () => void;
  triggerVariant?: Variant;
}

export const Modal = ({
  children,
  trigger,
  title = "",
  description = "",
  isOpen,
  onTriggerClick,
  onClose,
  triggerVariant = "primary",
}: PropsWithChildren<ModalProps>) => {
  return (
    <Dialog.Root open={isOpen}>
      <Trigger variant={triggerVariant} onClick={onTriggerClick}>
        {trigger}
      </Trigger>
      <Dialog.Portal>
        <VisuallyHidden.Root asChild>
          <Dialog.Title>{title}</Dialog.Title>
        </VisuallyHidden.Root>
        <VisuallyHidden.Root asChild>
          <Dialog.Description>{description}</Dialog.Description>
        </VisuallyHidden.Root>
        <Overlay>
          <Content onInteractOutside={onClose}>{children}</Content>
        </Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
