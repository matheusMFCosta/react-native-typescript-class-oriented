import React, { PropTypes } from "react";
import { StyleSheet, View, Text } from "react-native";
//import { teste } from './actions'
import { connect } from "react-redux";
interface Appprops {
    teste: Function;
}

class App extends React.Component<any, {}> {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {}
    render() {
        return (
            <View>
                <Text> HELOO</Text>
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
