import type { MaskitoOptions } from "@maskito/core";

export const phoneMaskOptions = {
  mask: [
    "(",
    /\d/,
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ],
} satisfies MaskitoOptions;
