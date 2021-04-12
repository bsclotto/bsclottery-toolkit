import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#ffb82e",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#12161C",
  backgroundDisabled: "#1a171f",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#2b3139",
  tertiaryText: "#707A8A",
  text: "#D8DCE1",
  textDisabled: "#BDC2C4",
  textSubtle: "#D8DCE1",
  fillColor: "#FFFFFF",
  scrollColor: "#5e6673",
  borderColor: "#E9EAEB",
  card: "#1D1F25",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#FFFFFF",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#f0f1f2",
  tertiaryText: "#dcd560",
  text: "#1E2329",
  textDisabled: "#666171",
  textSubtle: "#1E2329",
  fillColor: "#474d57",
  scrollColor: "#f0f1f2",
  borderColor: "#524B63",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
