import { useCallback, useState, useEffect } from "react";

export const useOnScroll = () => {
  const [y, setY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [direction, setDirection] = useState<"up" | "down">();

  const handleNavigation = useCallback((e: any) => {
    const window = e.currentTarget;

    setY(window.scrollY);
  }, []);

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    if (y > 0) {
      setIsScrolling(true);
      setDirection("down");
    } else {
      setIsScrolling(false);
      setDirection("up");
    }

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation, y]);

  return { y, isScrolling, direction };
};
