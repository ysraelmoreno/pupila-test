import {
  CSSState,
  Variant,
  VariantColorObjectMap,
} from "../../interfaces/styles.interface";

export function getTagColors(variant: Variant, state: CSSState) {
  const colorsObjectMap: VariantColorObjectMap = {
    hover: {
      ghost: {
        backgroundColor: "transparent",
        color: "var(--foreground)",
      },
      primary: {
        backgroundColor: "var(--foreground)",
        color: "var(--background)",
      },
      secondary: {
        border: "1px solid var(--foreground)",
        backgroundColor: "transparent",
        color: "var(--foreground)",
      },
    },
    normal: {
      ghost: {
        backgroundColor: "transparent",
        color: "var(--foreground)",
      },
      primary: {
        backgroundColor: "var(--foreground)",
        color: "var(--background)",
      },
      secondary: {
        border: "1px solid var(--foreground)",
        backgroundColor: "transparent",
        color: "var(--foreground)",
      },
    },
  };

  return colorsObjectMap[state][variant];
}
