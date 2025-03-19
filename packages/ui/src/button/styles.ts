import styled, { css } from "styled-components";
import getColorHelper from "./helpers/getColor";
import { Variant } from "../interfaces/styles.interface";

export interface IButtonContainerProps {
  variant?: Variant;
}

export const ButtonContainer = styled.button<IButtonContainerProps>`
  padding: 5px 20px;
  color: var(--background);
  background-color: var(--foreground);
  height: 45px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;

    cursor: default;
  }

  ${({ variant }) =>
    variant &&
    css`
      ${getColorHelper(variant, "normal")};

      &:hover {
        ${getColorHelper(variant, "hover")};
      }
    `}
`;
