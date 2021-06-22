import { useEffect, useState } from "react";

export function useMediaQuery(mediaQueryString) {
  const mediaQuery = window.matchMedia(mediaQueryString);
  const [isMatch, setIsMatch] = useState(mediaQuery.matches);

  useEffect(() => {
    mediaQuery.onchange = (e) => {
      setIsMatch(e.matches);
    };

    return () => {
      mediaQuery.onchange = null;
    };
  }, [mediaQuery]);

  return isMatch;
}
