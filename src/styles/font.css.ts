import { styleVariants } from "@vanilla-extract/css";

const fontWeight = {
  regular: "400",
  medium: "500",
  semibold: "600",
} as const;

type FontWeightKey = keyof typeof fontWeight;

const fontSizes = {
  head1: { fontSize: "6.4rem", lineHeight: "8rem" },
  head2: { fontSize: "5.6rem", lineHeight: "7.2rem" },
  head3: { fontSize: "4.8rem", lineHeight: "6.4rem" },
  head4: { fontSize: "4rem", lineHeight: "5.6rem" },
  head5: { fontSize: "3.2rem", lineHeight: "4rem" },
  head6: { fontSize: "2.4rem", lineHeight: "3.2rem" },
  body1: { fontSize: "2rem", lineHeight: "3rem" },
  body2: { fontSize: "1.8rem", lineHeight: "2.8rem" },
  body3: { fontSize: "1.6rem", lineHeight: "2.4rem" },
  body4: { fontSize: "1.4rem", lineHeight: "2rem" },
  caption1: { fontSize: "1.2rem", lineHeight: "1.8rem" },
} as const;

type FontSizeKey = keyof typeof fontSizes;

export const font = {} as Record<FontSizeKey, Record<FontWeightKey, string>>;

(Object.entries(fontSizes) as [FontSizeKey, { fontSize: string; lineHeight: string }][]).forEach(
  ([sizeKey, { fontSize, lineHeight }]) => {
    font[sizeKey] = styleVariants(fontWeight, (weight) => ({
      fontSize,
      lineHeight,
      fontWeight: weight,
    }));
  }
);
