import {
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";
import Image from "next/image";
import { theme } from "../../styles/theme";

export const Banner = () => {
  const BannerImg = chakra(Image, {
    shouldForwardProp: (prop) =>
      ["width", "height", "src", "alt"].includes(prop),
  });

  return (
    <SimpleGrid
      bgImage="url('Background.svg')"
      w="100%"
      height={335}
      columns={2}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <GridItem margin="80px 140px" colSpan={1}>
        <VStack spacing="20px">
          <Heading
            fontSize={theme.fontSizes.lg}
            fontWeight={theme.fontWeights.medium}
            color={theme.colors.white}
            lineHeight="54px"
          >
            5 Continentes, infinitas possibilidades.
          </Heading>
          <Text
            color={theme.colors.InfoWhite}
            fontSize={theme.fontSizes.sm}
            fontWeight={theme.fontWeights.normal}
            lineHeight="30px"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </VStack>
      </GridItem>
      <GridItem margin="76px 140px" colSpan={1}>
        <BannerImg
          src="/Airplane.svg"
          objectFit="cover"
          objectPosition="center"
          width={417}
          height={271}
          alt="Image Airplane"
        />
      </GridItem>
    </SimpleGrid>
  );
};
