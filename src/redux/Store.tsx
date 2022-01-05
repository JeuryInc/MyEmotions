import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/AuthApi";
import { emotionApi } from "../services/EmotionsApi"; 
import menuReducer from "./slices/MenuSlice";

const store = configureStore({
  reducer: { 
    menuOpener: menuReducer,
    [authApi.reducerPath]: authApi.reducer,
    [emotionApi.reducerPath]: emotionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({ 
  })
      .concat(authApi.middleware)
      .concat(emotionApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store