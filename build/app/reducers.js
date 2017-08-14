//import { assign } from "lodash";
var { filterActions } = require("redux-ignore");
import { appActionsName } from "./actions";
const multifactorInitialState = {
    init: false
};
export const appReducerNoFilter = (state = multifactorInitialState, action) => {
    if (action.Reduce) {
        return action.Reduce(state);
    }
    return state;
};
console.log(filterActions(appReducerNoFilter, Object.keys(appActionsName)));
export const appReducer = filterActions(appReducerNoFilter, Object.keys(appActionsName));
//# sourceMappingURL=reducers.js.map