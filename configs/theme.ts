import { StyleFunctionProps, extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'


const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  grassTeal: "#88ccca",
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props: StyleFunctionProps) => ({
      color: mode("#3d7aed", "#ff63c3")(props),
      textUnderlineOffset: 3,
    }),
  },
};

const theme = extendTheme({
  config,
  colors,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("#F2F5FA", "#202023")(props),
        WebkitTapHighlightColor: 'transparent',
      },
    })
  },
  components,
});
export default theme;
