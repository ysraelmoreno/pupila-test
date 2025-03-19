"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonContainer } from "./styles";
import { Variant } from "../interfaces/styles.interface";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
}

export const Button = ({
  children,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <ButtonContainer variant={variant} {...props}>
      {children}
    </ButtonContainer>
  );
};
