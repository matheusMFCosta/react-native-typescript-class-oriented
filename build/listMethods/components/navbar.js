import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
var { Container, Header, Title, Button, Left, Right, Body, Icon } = require("native-base");
class Navbar extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(View, null,
            React.createElement(Container, null,
                React.createElement(Header, null,
                    React.createElement(Left, null,
                        React.createElement(Button, { transparent: true },
                            React.createElement(Icon, { name: "arrow-back" }))),
                    React.createElement(Body, null,
                        React.createElement(Title, null, "Header")),
                    React.createElement(Right, null,
                        React.createElement(Button, { transparent: true },
                            React.createElement(Icon, { name: "menu" })))))));
    }
}
const mapStateToProps = (state, ownProps) => ({});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
//# sourceMappingURL=navbar.js.map