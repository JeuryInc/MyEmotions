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
      <footer>
        <p>
          Created with <i className="fa fa-heart"></i> by
          <a target="_blank"  rel="noreferrer" href="https://florin-pop.com">Florin Pop</a>
          - Read how I created this and how you can join the challenge
          <a target="_blank"  rel="noreferrer" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
        </p>
      </footer>
    </div>
  );
};

export default LoginLayout;
