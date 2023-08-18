import { configureStore, combineReducers } from "redux";
import cartReducer from "./slices/cartSlice";

const rootReducer = combineReducers({
  cart: cartReducer
});

const store = configureStore(rootReducer);

export default store;