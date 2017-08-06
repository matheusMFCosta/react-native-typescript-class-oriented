import { combineReducers } from "redux";
import { appReducer } from "./../listMethods/reducers";

import { App } from "./../listMethods/listMethods";

export interface appStateTypings {
    app: App;
}

const reducers: appStateTypings = {
    app: appReducer
};

export default combineReducers(reducers);
