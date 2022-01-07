import "../../../styles/App.module.scss";
import styles from "./LoginLayout.module.scss";
import IHomeProps from "../../../interfaces/IHomeProps";

const LoginLayout = ({ children }: IHomeProps) => {
  return (
    <div
      className={`${styles.main_container}`} >
      <div className={styles.body_container}>
        <div className={styles.content}>{children}</div>
      </div> 
    </div>
  );
};

export default LoginLayout;
