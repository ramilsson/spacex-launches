import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer } from "app/reducer";

const enhancer = applyMiddleware(thunkMiddleware);

export const store = createStore(reducer, enhancer);
