import { AllHTMLAttributes, PropsWithChildren } from "react";
import { Variant } from "../interfaces/styles.interface";
import { TagContainer } from "./styles";

export interface TagProps extends AllHTMLAttributes<HTMLDivElement> {
  variant?: Variant;
}

export const Tag = ({
  children,
  variant = "primary",
  ...props
}: PropsWithChildren<TagProps>) => {
  return (
    <TagContainer variant={variant} {...props}>
      {children}
    </TagContainer>
  );
};
