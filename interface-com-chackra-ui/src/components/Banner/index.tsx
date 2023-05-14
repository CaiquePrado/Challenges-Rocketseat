import { theme } from "@/styles/theme";
import { Box, Flex, Heading, Text, chakra } from "@chakra-ui/react";
import Image from "next/image";

export const Banner = () => {
  const BannerImg = chakra(Image, {
    shouldForwardProp: (prop) =>
      ["width", "height", "src", "alt"].includes(prop),
  });

  return (
    <Box
      bgImage="url('Background.svg')"
      height={335}
      width="100%"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Flex
        justify="space-between"
        margin="0 auto"
        maxWidth={1160}
        width="100%"
      >
        <Box
          margin="80px 0"
          fontSize={theme.fontSizes.lg}
          fontWeight={theme.fontWeights.medium}
          color={theme.colors.white}
          lineHeight="54px"
        >
          5 Continentes,
          <Heading
            fontSize={theme.fontSizes.lg}
            fontWeight={theme.fontWeights.medium}
            color={theme.colors.white}
            lineHeight="54px"
          >
            infinitas possibilidades.
          </Heading>
          <Box
            marginTop="20px"
            color={theme.colors.InfoWhite}
            fontSize={theme.fontSizes.sm}
            fontWeight={theme.fontWeights.normal}
            lineHeight="30px"
          >
            Chegou a hora de tirar do papel a viagem que você
            <Text
              color={theme.colors.InfoWhite}
              fontSize={theme.fontSizes.sm}
              fontWeight={theme.fontWeights.normal}
              lineHeight="30px"
            >
              sempre sonhou.
            </Text>
          </Box>
        </Box>

        <BannerImg
          w="100%"
          zIndex={999}
          marginLeft="205px"
          marginTop="76px"
          src="/Airplane.svg"
          objectPosition="center"
          objectFit="cover"
          width={417}
          height={271}
          alt="Image Airplane"
        />
      </Flex>
    </Box>
  );
};
