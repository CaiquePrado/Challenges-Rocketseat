import { chakra } from "@chakra-ui/react";
import Image from "next/image";

export const Divider = () => {
  const Separator = chakra(Image, {
    shouldForwardProp: (prop) =>
      ["width", "height", "src", "alt"].includes(prop),
  });

  return (
    <Separator
      src="/Divider.svg"
      mx="auto"
      height={1}
      width={90}
      marginTop="80px"
      marginBottom="52px"
      maxWidth={1160}
      alt="Separator"
    />
  );
};
