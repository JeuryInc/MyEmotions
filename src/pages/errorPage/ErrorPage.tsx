import { useTranslation } from "react-i18next";
import Button from "../../components/button/Button";  
import MainLayout from "../../components/layout/mainLayout/MainLayout";
import styles from "./ErrorPage.module.scss"; 

export const ErrorPage = () => {
  const { t } = useTranslation(); 
  const event = new Event("dispatch_error_reroute");

  const routeChange = () => window.dispatchEvent(event);
 

  return (
    <MainLayout  
    >
      <div className={styles.container}>
        <p>error page</p>
        <div className={styles.row}>{t("error-page.body")}</div>
        <div className={styles.row}>{t("error-page.body2")}</div>
        <div className={styles.row}>{t("error-page.body3")}</div>
        <div className={styles.row}>{t("error-page.body4")}</div>
        <div className={styles.row}>{t("error-page.body5")}</div>
        <Button
          text={t("globals.backToHome")}
          onClicked={() => routeChange()}
          className={styles.button} 
        />
      </div>
    </MainLayout>
  );
};
