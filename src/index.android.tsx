import React, { Component } from "react";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import createStore from "./createStore";
import Router from "./routes";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(sagaMiddleware);

interface Props {}

interface State {}

export default class Ios extends Component<Props, State> {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}
