// import {
//   TESTE
// } from './actions'
const testeInitialState = {
    teste: false
};
function assign(state, patch) {
    return Object.assign({}, state, patch);
}
export function todoApp(state = {}, action) {
    switch (action.type) {
        case "TOGGLE_TODO":
            return state;
        default:
            return state;
    }
}
//# sourceMappingURL=reducers.js.map