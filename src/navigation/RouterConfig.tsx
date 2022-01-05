import { Routes, Route } from "react-router-dom";
import {
  ROOT,
  EMOTION,
  LOGIN,
  REGISTER,
  TAG
} from "./Routes";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Emotion from "../pages/emotion/Emotion";
import { isLogged } from '../utils/Auth'
import { NotFound } from "../pages/notFound/NotFound";
import Tag from "../pages/tag/Tag";
import MyEmotions from "../pages/emotion/MyEmotions";

export const RouterConfig = () => {

  const _isLogged = isLogged();
  return (
    <Routes>
      <Route path={ROOT} element={<Home />} />
      <Route path={LOGIN} element={_isLogged ? <Home /> : <Login />} />
      <Route path={REGISTER} element={_isLogged ? <Home /> :<Register />} />=
      <Route path={`${TAG}/:name`} element={<Tag />} />    
      <Route path={EMOTION} element={<Emotion />} />   
      <Route path={`${EMOTION}/list`} element={<MyEmotions />} />   
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  );
};
