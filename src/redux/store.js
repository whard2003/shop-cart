import { createStore, combineReducers } from "redux";
import { panierReducer } from "./panier/panierReducer";

// Combine reducers if you have more than one
const rootReducer = combineReducers({
  panier: panierReducer,
  // otherReducer: otherReducer
});

export const store = createStore(rootReducer);