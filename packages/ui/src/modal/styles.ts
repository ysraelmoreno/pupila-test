import styled from "styled-components";
import {
  Overlay as DialogOverlay,
  Trigger as DialogTrigger,
  Content as DialogContent,
} from "@radix-ui/react-dialog";

export const Overlay = styled(DialogOverlay)`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled(DialogContent)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Trigger = styled(DialogTrigger)`
  padding: 5px 20px;
  color: var(--background);
  background-color: var(--foreground);
  height: 45px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
