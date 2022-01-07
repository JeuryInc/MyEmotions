import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../../../navigation/Routes";
import Button from "../../../button/Button";
import Logo from "../../../../assets/logo.png";
import Menu from "../../../../assets/menu.png";
import {  isLogged } from '../../../../utils/Auth'
import { useState } from "react";
import { useAppDispatch } from "../../../../utils/hooks";
import { toggleSidebar } from "../../../../redux/slices/MenuSlice";
import { IsTabletHook } from "../../../../utils/IsMobileHook";
import styles from "./Header.module.scss";

const Header = () => {
  const navigate = useNavigate();
  const isTable = IsTabletHook();

  const dispatch = useAppDispatch();

  const logIn = () => {
    navigate(LOGIN);
  };

  const handleOnClicked = () => {
    dispatch(toggleSidebar());
  };

  const [logged] = useState(isLogged());

  // navigate(SIGNOUT) 
  return (<nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
      <a className="navbar-brand brand-logo" href="/"><img src={Logo} className="mr-2" alt="logo" /></a>
      <a className="navbar-brand brand-logo-mini" href="index.html">ME</a>
    </div>
    <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
      <ul className="navbar-nav navbar-nav-right">
        {!logged ? <li className="nav-item nav-profile dropdown">
          <Button onClicked={logIn} text="Login" className={styles.button} />
        </li> : <></>}
        {
          isTable ? <li className="nav-item nav-profile dropdown">
            <img src={Menu} onClick={handleOnClicked} className="imgMenu" alt="menu" />
          </li> : <></>}

      </ul>
    </div>
  </nav>);
}

export default Header;
