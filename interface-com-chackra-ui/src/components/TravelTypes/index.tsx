import { theme } from "@/styles/theme";
import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export const TravelTypes = () => {
  return (
    <Flex
      margin="80px auto"
      maxWidth={1160}
      width="100%"
      align="center"
      flexWrap="wrap"
      justifyContent="space-between"
    >
      <Flex flexDirection="column" align="center" gap="24px">
        <Image
          width={85}
          height={85}
          src="/travelImg/cocktail.svg"
          alt="Vida noturna"
        />
        <Text
          color={theme.colors.Infogray}
          fontSize={theme.fontSizes.md}
          fontWeight={theme.fontWeights.semibold}
          lineHeight="36px"
        >
          Vida noturna
        </Text>
      </Flex>
      <Flex flexDirection="column" align="center" gap="24px">
        <Image
          width={85}
          height={85}
          src="/travelImg/surf.svg"
          alt="Vida noturna"
        />
        <Text
          color={theme.colors.Infogray}
          fontSize={theme.fontSizes.md}
          fontWeight={theme.fontWeights.semibold}
          lineHeight="36px"
        >
          Praia
        </Text>
      </Flex>
      <Flex flexDirection="column" align="center" gap="24px">
        <Image
          width={85}
          height={85}
          src="/travelImg/building.svg"
          alt="Vida noturna"
        />
        <Text
          color={theme.colors.Infogray}
          fontSize={theme.fontSizes.md}
          fontWeight={theme.fontWeights.semibold}
          lineHeight="36px"
          textAlign="center"
        >
          Moderno
        </Text>
      </Flex>
      <Flex flexDirection="column" align="center" gap="24px">
        <Image
          width={85}
          height={85}
          src="/travelImg/museum.svg"
          alt="Vida noturna"
        />
        <Text
          color={theme.colors.Infogray}
          fontSize={theme.fontSizes.md}
          fontWeight={theme.fontWeights.semibold}
          lineHeight="36px"
        >
          Clássico
        </Text>
      </Flex>
      <Flex flexDirection="column" align="center" gap="24px">
        <Image
          width={85}
          height={85}
          src="/travelImg/earth.svg"
          alt="Vida noturna"
        />
        <Text
          color={theme.colors.Infogray}
          fontSize={theme.fontSizes.md}
          fontWeight={theme.fontWeights.semibold}
          lineHeight="36px"
        >
          e mais...
        </Text>
      </Flex>
    </Flex>
  );
};
