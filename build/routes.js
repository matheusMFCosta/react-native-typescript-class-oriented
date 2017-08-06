var { Scene, Router } = require('react-native-router-flux');
import React from "react";
import ListMethods from './listMethods/index';
export default class Routes extends React.Component {
    render() {
        return (React.createElement(Router, null,
            React.createElement(Scene, { key: "root", hideNavBar: true },
                React.createElement(Scene, { key: "ListMethods", component: ListMethods, initial: true }))));
    }
}
//# sourceMappingURL=routes.js.map