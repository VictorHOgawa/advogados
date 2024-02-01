import { useEffect, useState } from 'react';

export function useWindowDimensions() {
  const [width, setWidth] = useState(100);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return width;
}



export default function checkSreenSize() {
  const screenSize = useWindowDimensions();
  if (screenSize >= 1300) {
    return 13;
  } else if (screenSize >= 1200) {
    return 12;
  } else if (screenSize >= 1100) {
    return 11;
  } else if (screenSize >= 1000) {
    return 10;
  } else if (screenSize >= 900) {
    return 9;
  } else if (screenSize >= 800) {
    return 8;
  } else if (screenSize >= 700) {
    return 7;
  } else if (screenSize >= 600) {
    return 6;
  } else if (screenSize >= 500) {
    return 5;
  } else if (screenSize >= 400) {
    return 4;
  } else if (screenSize >= 300) {
    return 3;
  } else {
    return 0;
  }
};

