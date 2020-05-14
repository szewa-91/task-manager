import { applyMiddleware, combineReducers, compose, createStore, Reducer, StoreEnhancer } from 'redux';
import thunk from 'redux-thunk';
import tasksReducer from 'src/store/tasks/tasksReducer';
/* tslint:disable:no-string-literal */
const debugMode = process.env.NODE_ENV === 'development' && window['devToolsExtension'];
const thunkEnhancer = applyMiddleware(thunk);
const devToolsEnhancer: any = debugMode ? window['devToolsExtension']() : (f: any) => f;
/* tslint:enable:no-string-literal */

const enhancers: StoreEnhancer<{ dispatch: any }> = compose(
    thunkEnhancer,
    devToolsEnhancer
);

const reducers: Reducer = combineReducers({
    tasks: tasksReducer
});

export default class TaskManagerStoreCreator {
    public static create() {
        return createStore(reducers, enhancers);
    }
}
