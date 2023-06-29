import { StyleFunctionProps, extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'
import { palettes } from "./palettes";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  colors: palettes.colors,
  config,
  sizes: {
    container: {
      xxl: '1400px',
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode(palettes.colors.neutral[0] , palettes.colors.neutral[600])(props),
        WebkitTapHighlightColor: 'transparent',
      },
    })
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '4px',
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
