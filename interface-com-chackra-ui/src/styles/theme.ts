import { extendTheme } from "@chakra-ui/react";

export const Theme = extendTheme({
  colors: {
    Highlight: "#FFBA08",
    Dark: {
      Black: "#000000",
      HeadingsAndText: "#47585B",
      Info: "#999999",
    },
    Light: {
      White: "#FFFFFF",
      HeadingsAndText: "#F5F8FA",
      Info: "#DADADA",
    },
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
