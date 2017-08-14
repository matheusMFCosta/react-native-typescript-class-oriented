import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers/index";
import devToolsEnhancer from "remote-redux-devtools";
var { createLogicMiddleware } = require("redux-logic");
import { logicActions } from "./reducers/logic";
const logicMiddleware = createLogicMiddleware(logicActions, {});
const wwow = asads => dswe => asd => {
    console.log(asd);
    console.log(asd);
    console.log(asd);
    dswe(asd);
};
export default (data = {}) => {
    //const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });
    const middleware = applyMiddleware(logicMiddleware);
    const composeMiddlware = compose(middleware, devToolsEnhancer());
    return createStore(reducer, data, composeMiddlware);
};
//# sourceMappingURL=createStore.js.map