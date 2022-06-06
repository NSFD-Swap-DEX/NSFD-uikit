import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#c32489",
  primaryBright: "#ebcac0",
  primaryDark: "#8f6e10",
  secondary: "#8f1041",
  success: "#31D0AA",
  warning: "#bd06ad",
};

export const brandColors = {
  binance: "#f00b48",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f00b48",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: '#d95228',
  textDisabled: '#998c83',
  textSubtle: '#E7661D',
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#f00b48",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  // primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
