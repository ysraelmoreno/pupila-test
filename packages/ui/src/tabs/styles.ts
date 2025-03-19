import styled from "styled-components";
import { Root, Trigger } from "@radix-ui/react-tabs";

export const TabsRootContainer = styled(Root)``;

export const TabsTrigger = styled(Trigger)`
  background-color: transparent;
  color: var(--foreground);
  border: none;
  border-bottom: 4px solid var(--foreground);
  padding: 10px 15px;

  & + & {
    margin-left: 10px;
  }
`;
