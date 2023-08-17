import { createStore, combineReducers } from "redux";
import cartReducer from "./slices/cartSlice";

const rootReducer = combineReducers({
  cart: cartReducer
});

const store = createStore(rootReducer);

export default store;