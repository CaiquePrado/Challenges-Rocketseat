import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <div className={poppins.className}>
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}
