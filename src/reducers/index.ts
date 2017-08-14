import { combineReducers } from "redux";
import { appReducer } from "./../app/reducers";

import { App } from "./../app/app";

export interface appStateTypings {
    app: App;
}

const reducers: appStateTypings = {
    app: appReducer
};

export default combineReducers(reducers);
