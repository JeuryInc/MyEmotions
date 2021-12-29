import { useTranslation } from "react-i18next";
import Button from "../button/Button";
import styles from "./ConnectionError.module.scss";

const ConnectionError = () => {
  const { t } = useTranslation();
  const event = new Event('dispatch_error_reroute');

  const routeChange = () => window.dispatchEvent(event);
  return (
    <div className={styles.container}>
    <p>conecction error page</p>
      <div className={styles.text_container}>
        <div className={styles.row}>{t("error-page.body")}</div>
        <div className={styles.row}>{t("error-page.body2")}</div>
        <div className={styles.row}>{t("error-page.body3")}</div>
        <div className={styles.row}>{t("error-page.body4")}</div>
        <div className={styles.row}>{t("error-page.body5")}</div>
        <div className={styles.button}>
          <Button
            text={t('globals.try-again')}
            onClicked={() => routeChange()}
            className={styles.button}
          />
        </div>
      </div>
    </div>
  );
};

export default ConnectionError;
