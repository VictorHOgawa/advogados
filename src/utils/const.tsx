import checkSreenSize from "@/utils/checkSreenSize";  

export const Quantity = () => {
    const screenSize = checkSreenSize();
  
    if (screenSize === 13) {
      return 4;
    } else if (screenSize === 12) {
      return 4;
    } else if (screenSize === 11) {
      return 3.5;
    } else if (screenSize === 10) {
      return 3.1;
    } else if (screenSize === 9) {
      return 2.5;
    } else if (screenSize === 8) {
      return 2.5;
    } else if (screenSize === 7) {
      return 3;
    } else if (screenSize === 6) {
      return 2.5;
    } else if (screenSize === 5) {
      return 2.1;
    } else if (screenSize === 4) {
      return 2.2;
    } else if (screenSize === 3) {
      return 2.2;
    } else {
      return 0;
    }
  };