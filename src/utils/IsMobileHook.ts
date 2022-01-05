import { useState, useEffect } from "react";
import useWindowDimensions from "./UseWindowDimensions";
import breakPoints from "../styles/breakPoints.module.scss";
 
export function IsMobileHook() {
  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(width < parseInt(breakPoints.sm));

  useEffect(() => {
    setIsMobile(width < parseInt(breakPoints.sm));
  }, [width]);

  return isMobile;
}
 
export function IsTabletHook() {
  const { width } = useWindowDimensions();
  const [isTablet, setIsTablet] = useState(width < parseInt(breakPoints.md));

  useEffect(() => {
    setIsTablet(width < parseInt(breakPoints.md));
  }, [width]);

  return isTablet;
}
 