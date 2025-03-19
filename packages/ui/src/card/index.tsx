import { AllHTMLAttributes, PropsWithChildren } from "react";
import { CardContainer } from "./styles";

export const Card = ({
  children,
  ...props
}: PropsWithChildren<AllHTMLAttributes<HTMLDivElement>>) => {
  return <CardContainer {...props}>{children}</CardContainer>;
};
