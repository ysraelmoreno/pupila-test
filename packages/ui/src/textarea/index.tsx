import { TextareaHTMLAttributes } from "react";
import { TextAreaContainer } from "./styles";

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = ({ ...props }: TextAreaProps) => {
  return <TextAreaContainer {...props} />;
};
