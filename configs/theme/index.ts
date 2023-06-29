import { StyleFunctionProps, extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'
import { palettes } from "./palettes";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  colors: palettes.colors,
  config,
  sizes: {
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1184px',
      xxl: '1400px',
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: '"Open Sans", sans-serif',
        bg: mode(palettes.colors.neutral[0] , palettes.colors.neutral[600])(props),
        WebkitTapHighlightColor: 'transparent',
      },
    })
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '8px',
        fontSize: '0.875rem',
      },
      variants: {
        primary: (props: StyleFunctionProps) => ({
          bg: palettes.colors.primary[500],
          color: palettes.colors.neutral[0],
          _hover: {
            bg: palettes.colors.primary[600],
          },
          _active: {
            bg: palettes.colors.primary[700],
          }
        }),
        link: {
          color: palettes.colors.primary[400],
        },
        connectorButton: {
          bg: palettes.colors.neutral[400],
          _hover: {
            opacity: 0.8,
          },
          rightIcon: {
            ml: 'auto',
          }
        },
        outline: (props: StyleFunctionProps) => ({
          _hover: {
            bg: props.colorMode == 'light'? palettes.colors.neutral[50]: palettes.colors.neutral[500],
          }
        })
      }
    },
    Modal: {
      baseStyle: (props: StyleFunctionProps) => ({
        dialog: {
          bg: mode(palettes.colors.neutral[0], palettes.colors.neutral[600])(props),
          borderRadius: '20px',
        }
      }),
      
    },
    Menu: {
      baseStyle:  (props: StyleFunctionProps) => ({
        list: {
          bg: mode(palettes.colors.neutral[0], palettes.colors.neutral[500])(props),
          borderColor: mode(palettes.colors.neutral[50], palettes.colors.neutral[400])(props),
          borderRadius: '20px',
          boxShadow: 'lg'
        },
        item: {
          bg: 'inherit',
        }
      }),
    },
    Progress: {
      baseStyle: {
        filledTrack: {
          bg: palettes.colors.primary[500],
        }
      }
    }
  }
});
