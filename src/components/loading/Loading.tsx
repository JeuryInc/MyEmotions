import ILoadingProps from "../../interfaces/ILoadingProps";
import styles from "./Loading.module.scss";

/**
 * Loading Component.
 *
 * @param {string} className
 * @example
 * <Loading className={style.className} /> // setting the class to override or add new css properties
 * @param {bool} fullScreen
 * @example
 * <Loading fullScreen={false} /> // setting the height to take the 100vh
 * @param {int} quantityDot
 * @example
 * <Loading quantityDot={3} /> // setting the quantity of dot
 * @param {boolean} smallDots
 * @example
 * <Loading smallDots={false} /> // setting the size of the dots
 */
const Loading = ({className, fullScreen, smallDots, quantityDot} : ILoadingProps) => {

  function returnDots(quantity : number) {
    for (var i = 0; i < quantity; i++) {
      return <div className={styles.dot}></div>;
    }
  }

  let classes = styles.container;
  if (className) {
    classes = `${classes} ${className}`;
  }
  if (fullScreen) {
    classes = `${classes} ${styles.full_screen}`;
  }
  if (smallDots) {
    classes = `${classes} ${styles.small_dots}`;
  }

  return (
    <div className={classes}>
      <div className={styles.hollow_dots_spinner}>
        {!!quantityDot ? (
          returnDots(quantityDot)
        ) : (
          <>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </>
        )}
      </div>
    </div>
  );
};

export default Loading;
