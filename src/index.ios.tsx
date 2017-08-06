import React, { Component } from "react";
import { Provider } from "react-redux";
import createStore from "./createStore";
import Router from "./routes";

const store = createStore();

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
