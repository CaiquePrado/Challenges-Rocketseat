import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    Highlight: "#FFBA08",

    Black: "#000000",
    HeadingsAndTextGray: "#47585B",
    Infogray: "#999999",

    White: "#FFFFFF",
    HeadingsAndTextWhite: "#F5F8FA",
    InfoWhite: "#DADADA",
  },
  fontSizes: {
    xs: "1rem",
    sm: "1.25rem",
    md: "1.5rem",
    lg: "2.25rem",
    xl: "3rem",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
});
