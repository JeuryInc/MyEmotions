import { Routes, Route } from "react-router-dom";
import {
  ROOT,
  EMOTION,
  LOGIN,
  REGISTER
} from "./Routes";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Emotion from "../pages/emotion/Emotion";
import { isLogged } from '../utils/Auth'

export const RouterConfig = () => {

  const _isLogged = isLogged();
  return (
    <Routes>
      {/* List all public routes here */}
      <Route path={ROOT} element={<Home />} />
      <Route path={LOGIN} element={_isLogged ? <Home /> : <Login />} />
      <Route path={REGISTER} element={_isLogged ? <Home /> :<Register />} />
      {/* List all private/auth routes here */}
      <Route path={EMOTION} element={<Emotion />} />
      {/* List a generic 404-Not Found route here */}
    </Routes>
  );
};
