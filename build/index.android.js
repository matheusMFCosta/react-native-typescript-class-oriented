import React, { Component } from "react";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import createStore from "./createStore";
import Router from "./routes";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(sagaMiddleware);
export default class Ios extends Component {
    render() {
        return (React.createElement(Provider, { store: store },
            React.createElement(Router, null)));
    }
}
//# sourceMappingURL=index.android.js.map