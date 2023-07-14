import "../styles/styles.scss";
import {
  ChakraProvider,
  defineStyleConfig,
  extendTheme,
} from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { accordionAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export const buttonTheme = defineStyleConfig({
  baseStyle: {
    fontWeight: "bold",
    borderRadius: "5px",
    paddingX: "1.5rem",
  },
  defaultProps: {
    variant: "primary",
  },
  variants: {
    primary: {
      color: "white",
    },
  },
});

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  button: {
    backgroundColor: "black",
    color: "white",
    _hover: {
      bg: "black",
    },
    borderRadius: 5,
    fontWeight: "bold",
  },
});
const accordionTheme = defineMultiStyleConfig({ baseStyle });

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f2f2f2",
      200: "#d9d9d9",
      300: "#bfbfbf",
      400: "#a6a6a6",
      500: "#8c8c8c",
      600: "#737373",
      700: "#595959",
      800: "#2a2a2a",
      900: "#121212",
      green: "#4fc378",
      cgreen: "#38a169",
      blue: "#0078ff",
      cblue: "#3182ce",
      main: "#212529",
    },
  },
  fonts: {
    heading: `'Spartan', sans-serif`,
    body: `'Spartan', sans-serif`,
  },
  components: {
    Button: buttonTheme,
    Container: {
      baseStyle: {
        maxW: "80rem",
      },
    },
    Accordion: accordionTheme,
  },
});
export default function App({ Component, pageProps }: AppProps) {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("carrito") == null) {
      localStorage.setItem("carrito", JSON.stringify([]));
    }
  }
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps}/>
    </ChakraProvider>
  );
}
