import React from "react";
import { View, Text } from "react-native";
//import { teste } from './actions'
import { connect } from "react-redux";
class listMethods extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() { }
    render() {
        return (React.createElement(View, null,
            React.createElement(Text, null, " HELOO")));
    }
}
const mapStateToProps = (state, ownProps) => ({});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(listMethods);
//# sourceMappingURL=index.js.map