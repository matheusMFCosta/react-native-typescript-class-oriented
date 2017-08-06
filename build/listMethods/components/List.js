import React from "react";
import { View, Text } from "react-native";
//import { teste } from './../actions'
import { connect } from "react-redux";
class List extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
        this.props.teste();
    }
    render() {
        return (React.createElement(View, null,
            React.createElement(Text, null, "11111")));
    }
}
const mapStateToProps = (state, ownProps) => ({});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(List);
//# sourceMappingURL=List.js.map