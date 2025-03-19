import styled, { css } from "styled-components";
import { Variant } from "../interfaces/styles.interface";
import { getTagColors } from "./helpers/getColor";

export interface TagContainerProps {
  variant: Variant;
}

export const TagContainer = styled.div<TagContainerProps>`
  ${({ variant }) =>
    variant &&
    css`
      padding: 5px 10px;
      width: fit-content;
      border-radius: 99px;

      ${getTagColors(variant, "normal")}

      &:hover {
        ${getTagColors(variant, "hover")}
      }
    `}
`;
