"use client";
import React, { InputHTMLAttributes, forwardRef } from "react";
import { InputContainer } from "./styles";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, ...props }: InputProps, ref) => {
    return <InputContainer ref={ref} placeholder={placeholder} {...props} />;
  }
);

Input.displayName = "Input";
