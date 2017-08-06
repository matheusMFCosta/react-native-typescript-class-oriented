import { assign } from "./../utils/functions";
export var appActionsName;
(function (appActionsName) {
    appActionsName["INIT_APP"] = "INIT_APP";
})(appActionsName || (appActionsName = {}));
export class appInit {
    constructor(payload) {
        this.payload = payload;
        this.type = appActionsName.INIT_APP;
    }
    Reduce(state) {
        return assign(state, { init: this.payload });
    }
}
export const appActions = {
    appInit
};
//# sourceMappingURL=actions.js.map