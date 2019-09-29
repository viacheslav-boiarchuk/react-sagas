import { createStore, applyMiddleware, compose } from 'redux';
import createSageMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { reducer } from './reducers';
import { createLogger } from 'redux-logger';
import createGameMiddleWare from "./middleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSageMiddleware();
const logger = createLogger();
const middlewareList = [createGameMiddleWare, sagaMiddleware, logger];

export function configureStore(preloadedState) {

    const store = createStore(
        reducer,
        preloadedState,
        composeEnhancers(
            applyMiddleware(...middlewareList)
        )
    );

    sagaMiddleware.run(rootSaga);

    return store;
}
