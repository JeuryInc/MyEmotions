import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import "../../../styles/App.module.scss";
import styles from "./MainLayout.module.scss";
import IHomeProps from "../../../interfaces/IHomeProps";

const MainLayout = ({ children }: IHomeProps) => {
  return (
    <div className="container-scroller">
      <Header />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-md-12 grid-margin">
                <div className="row">
                  <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                    <div className={styles.content}>{children}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;