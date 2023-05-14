import { theme } from "@/styles/theme";
import { Heading } from "@chakra-ui/react";

export const VamosNessa = () => {
  return (
    <Heading
      textAlign="center"
      color={theme.colors.HeadingsAndTextGray}
      fontSize={theme.fontSizes.lg}
      fontWeight={theme.fontWeights.medium}
      lineHeight="54px"
      mb="52px"
    >
      Vamos nessa? <br /> Então escolha seu continente
    </Heading>
  );
};
