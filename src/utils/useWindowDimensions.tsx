import { useLayoutEffect, useState } from "react";

export const useWindowDimensions = () => {
    const [width, setWidth] = useState(100);

    const updateDimensions = () => {
      setWidth(window.innerWidth);
    };
    useLayoutEffect(() => {
      setWidth(window.innerWidth);
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    return width > 700 ? true : false;
  };
