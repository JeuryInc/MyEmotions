
import Button from "../../components/button/Button";
import styles from "./NotFound.module.scss";
import { ROOT } from "../../navigation/Routes";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../components/layout/mainLayout/MainLayout";

export const NotFound = () => {
  const navigate = useNavigate();
  const routeChange = () => navigate(ROOT);

  return (
    <MainLayout
    >
      <div className={styles.container}>
        <h1>404</h1>
        <p>Sorry, the page you're looking for cann't be found</p>
        <Button
          text="Go back to home"
          onClicked={() => routeChange()}
        />
      </div>
    </MainLayout>
  );
};
