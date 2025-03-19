import {
  CSSState,
  Variant,
  VariantColorObjectMap,
} from "../../interfaces/styles.interface";

const getColorHelper = (variant: Variant = "primary", state: CSSState) => {
  const variantColors: VariantColorObjectMap = {
    hover: {
      ghost: {
        backgroundColor: "#e3e3e3",
        color: "var(--backgroud)",
      },
      primary: {
        color: "var(--background)",
        backgroundColor: "var(--foreground)",
      },
      secondary: {
        backgroundColor: "#e3e3e3",
        color: "var(--foreground)",
        border: "1px solid var(--foreground)",
      },
    },
    normal: {
      ghost: {
        backgroundColor: "transparent",
        color: "var(--backgroud)",
      },
      primary: {
        color: "var(--background)",
        backgroundColor: "var(--foreground)",
      },
      secondary: {
        backgroundColor: "transparent",
        color: "var(--foreground)",
        border: "1px solid var(--foreground)",
      },
    },
  };

  return variantColors[state][variant];
};

export default getColorHelper;
