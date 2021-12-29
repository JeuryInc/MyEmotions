import ICardProps from "../../interfaces/ICardProps";
import styles from "./Card.module.scss";  
/**
 * Custom Card Component.
 *
 * @param {string} color - The color property is a type string from "white" - "white06" - "turquoise" - "turquoise12" - "darkGreen" - "darkGreen06" - "lightGray50" - "transparent" - "bgGray" - "aux216" - "warning16" - "error16" - "warning12" - "error12" - "warning" - "error"
 * @example
 * <Card color="white" /> // setting the background color
 * @param {bool} boxShadow - The boxShadow is a type bool
 * @param {number} borderType - The borderType property is a type number from 0 - 6
 * @example
 * <Card /> // DEFAULT: No border
 * <Card borderType={1} /> // Dark Green 12% border with 12px radius
 * <Card borderType={2} /> // White 50% border with 10px radius
 * <Card borderType={3} /> // Turquoise border with 12px radius
 * <Card borderType={4} /> // Gray border with 10px radius
 * <Card borderType={5} /> // same borderType 1 with hover animation
 * <Card borderType={6} /> // same borderType 1 start from mobile
 * <Card borderType={7} /> // Turquoise border with 10px radius from mobile
 * <Card borderType={8} /> // error border with 10px radius from mobile
 * <Card borderType={9} /> // warning border with 10px radius from mobile
 * @param {string} className
 * @example
 * <Card mobilePadding={false} /> // setting the default padding 20px from mobile
 * @param {function} onClick - The onClick is a function to handle the on click
 */
export default function Card({ boxShadow, children, color, onClick, className } : ICardProps) {
  let colorClass = styles.colorWhite;

  if (color === "turquoise") {
    colorClass = styles.colorTurquoise;
  } else if (color === "turquoise12") {
    colorClass = styles.colorTurquoise12;
  } else if (color === "lightGray50") {
    colorClass = styles.colorLightGray50;
  } else if (color === "white06") {
    colorClass = styles.colorWhite06;
  } else if (color === "darkGreen") {
    colorClass = styles.colorDarkGreen;
  } else if (color === "darkGreen06") {
    colorClass = styles.colorDarkGreen06;
  } else if (color === "transparent") {
    colorClass = styles.colorTransparent;
  } else if (color === "bgGray") {
    colorClass = styles.colorBgGray;
  } else if (color === "aux216") {
    colorClass = styles.colorAux216;
  } else if (color === "warning16") {
    colorClass = styles.colorWarning16;
  } else if (color === "error16") {
    colorClass = styles.colorError16;
  } else if (color === "warning12") {
    colorClass = styles.colorWarning12;
  } else if (color === "error12") {
    colorClass = styles.colorError12;
  } else if (color === "warning") {
    colorClass = styles.colorWarning;
  } else if (color === "error") {
    colorClass = styles.colorError;
  } else {
    colorClass = styles.colorWhite;
  }

  let boxShadowClass = "";
  if (boxShadow) {
    boxShadowClass = styles.withBoxShadow;
  } 

  const classNames = `${
    styles.card
  } ${colorClass} ${boxShadowClass}`;

  return (
    <div className={classNames} onClick={onClick}>
      {children}
    </div>
  );
}
