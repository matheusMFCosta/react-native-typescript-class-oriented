import { fork } from 'redux-saga/effects';
import { watchRemovePolicyStatement } from './../listMethods/sagas';
export const rootSaga = function* root() {
    yield [
        fork(watchRemovePolicyStatement)
    ];
};
//# sourceMappingURL=index.js.map