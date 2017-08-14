import createLogic from "./../utils/createLogic";
import { appActions } from "./../app/actions";
const actionsArray = [...Object.values(appActions)];
export let logicActions = [];
actionsArray.forEach((value, index) => {
    logicActions.push(createLogic(new value()));
});
//# sourceMappingURL=logic.js.map