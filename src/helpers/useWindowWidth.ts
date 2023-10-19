import { useEffect, useState } from "react";

const getIsMobile = () => window.innerWidth;

export default function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(getIsMobile());

  useEffect(() => {
    const onResize = () => {
      setScreenWidth(getIsMobile());
    }

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    }
  }, []);

  return screenWidth;
}