export type Variant = "primary" | "secondary" | "ghost";
export type CSSState = "hover" | "normal";

export type VariantColorObjectMap = {
  [key in CSSState]: {
    [key in Variant]: {
      backgroundColor: string;
      color: string;
      border?: string;
    };
  };
};
