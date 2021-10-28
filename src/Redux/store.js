import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

const reducers = combineReducers({
  //...
  cart: cartReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
});
