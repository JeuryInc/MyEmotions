
import Button from "../../components/button/Button";
import styles from "./NotFound.module.scss";
import { useTranslation } from "react-i18next";
import { ROOT } from "../../navigation/Routes";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../components/layout/mainLayout/MainLayout";

export const NotFound = () => {
  const navigate = useNavigate();
  const routeChange = () => navigate(ROOT);
  const { t } = useTranslation();

  return (
    <MainLayout
    >
      <div className={styles.container}>
        <Button
          text={t("globals.backToHome")}
          onClicked={() => routeChange()}
        />
      </div>
    </MainLayout>
  );
};
