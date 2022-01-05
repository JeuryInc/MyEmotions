import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../../../navigation/Routes";
import Button from "../../../button/Button";
import Logo from "../../../../assets/logo.png";
import Setting from "../../../../assets/setting.png";
import Menu from "../../../../assets/menu.png";
import { signOut, isLogged } from '../../../../utils/Auth'
import { useState } from "react";
import { useAppDispatch } from "../../../../utils/hooks";
import { toggleSidebar } from "../../../../redux/slices/MenuSlice";
import { IsTabletHook } from "../../../../utils/IsMobileHook";

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
        {logged ?
          <> <li className="nav-item nav-profile dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
              <img src={Setting} className="imgSetting" alt="profile" />
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
              <a className="dropdown-item" onClick={signOut}>
                <i className="ti-power-off text-primary"></i>
                Logout
              </a>
            </div>
          </li>
            {
              isTable ? <li className="nav-item nav-profile dropdown">
                <img src={Menu} onClick={handleOnClicked} className="imgMenu" alt="menu" />
              </li> : <></>}
          </>
          :
          <Button onClicked={logIn} text="Login" />}
      </ul>
    </div>
  </nav>);
}

export default Header;
