import BUTTON_SIZE from "../../enums/ButtonSize";
import IButtonProps from "../../interfaces/IButtonProps";
import styles from "./Button.module.scss";

/**
 * Custom Button Component.
 *
 * @param {string} text - The text property is a string and is required
 * @param {number} type - The type property goes from 0 - 6 and should be passed as a number
 * @example
 * <Button /> // DEFAULT: Green Background Button
 * <Button type={1} /> // Dark Green Background Button
 * <Button type={2} /> // Gray Background Button
 * <Button type={3} /> // Red Background Button
 * <Button type={4} /> // White Background Button
 * <Button type={5} /> // Transparent with Turquoise border Button
 * <Button type={6} /> // Transparent with Red border Button
 * <Button type={7} /> // Transparent with Black border Button 
 * @param {string} btnType - The btnType property is a string
 * @param {boolean} isLoading - Show loading button animation
 * @param {function} onClicked - The onClicked function passed to this component should be a "useCallback" hooks
 * @param {bool} disabled - Determines whether component is disabled or not (optional)
 * @param {BUTTON_SIZE} size - The size property is BUTTON_SIZE
 * @example
 * <Button /> // DEFAULT: Normal size Button
 * <Button size={BUTTON_SIZE.MEDIUM} /> // Medium size Button
 * @param {string} className - Adds an optional class to button
 * @example
 * <Button className={styles.className} /> // setting class name 
 */
export default function Button({ id, type, className, size, isLoading, text, disabled,  onClicked, btnType } : IButtonProps) {
  let classNames;
  if (type === 1) {
    classNames = `${className ?? ""} ${styles.ownButton} ${
      styles.ownButtonStyleOne
    }`;
  } else if (type === 2) {
    classNames = `${className ?? ""} ${styles.ownButton} ${
      styles.ownButtonStyleTwo
    }`;
  } else if (type === 3) {
    classNames = `${className ?? ""} ${styles.ownButton} ${
      styles.ownButtonStyleThree
    }`;
  } else if (type === 4) {
    classNames = `${className ?? ""} ${styles.ownButton} ${
      styles.ownButtonStyleFour
    }`;
  } else if (type === 5) {
    classNames = `${className ?? ""} ${styles.ownButton} ${
      styles.ownButtonStyleFive
    }`;
  } else if (type === 6) {
    classNames = `${className ?? ""} ${styles.ownButton} ${
      styles.ownButtonStyleSix
    }`;
  } else if (type === 7) {
    classNames = `${className ?? ""} ${styles.ownButton} ${
      styles.ownButtonStyleSeven
    }`;
  } else {
    classNames = `${className ?? ""} ${styles.ownButton} ${
      styles.ownButtonStyleDefault
    }`;
  }

  if (size === BUTTON_SIZE.SMALL) {
    classNames = `${classNames} ${styles.small_btn}`;
  }

  const element = !isLoading ? (
    <div>{text}</div>
  ) : (
    <div className={styles.spinner}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
  return (
    <div className={styles.ownDiv}>
      {disabled ? (
        <button 
          type={btnType ?? "button"}
          className={classNames}
          id={id}
          disabled={disabled}
        >
          {element}
        </button>
      ) : (
        <button 
          type={btnType ?? "button"}
          className={classNames}
          onClick={onClicked}
          id={id}
        >
          {element}
        </button>
      )}
    </div>
  );
}
