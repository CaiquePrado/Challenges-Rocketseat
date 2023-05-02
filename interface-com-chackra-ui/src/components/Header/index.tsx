import { Flex, chakra } from "@chakra-ui/react";
import Image from "next/image";

export const Header = () => {
  const Logo = chakra(Image, {
    shouldForwardProp: (prop) =>
      ["width", "height", "src", "alt"].includes(prop),
  });

  return (
    <Flex as="header" width="100%" height={100} justify="center" align="center">
      <Logo src="/Logo.svg" width={184} height={46} alt="logo worldTrip" />
    </Flex>
  );
};
