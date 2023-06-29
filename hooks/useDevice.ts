import { useBreakpointValue } from "@chakra-ui/react";

export const useDevice = () => {
  const isMobile = useBreakpointValue({ sm: true, md: false });
  const isTablet = useBreakpointValue({ sm: false, md: true, lg: false });
  const isDesktop = useBreakpointValue({ lg: true });
  return { isMobile, isTablet, isDesktop };
};
