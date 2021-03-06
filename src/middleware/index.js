import { configureStore } from '../store';
import * as cnt from '../actions/constants';

const createGameMiddleWare = configureStore => next => {
    console.log(configureStore);

    return action => {
        switch (action.type) {
            case cnt.LOADER_SHOW:
                console.log('YRA!');
                return next(action);
            case cnt.FILMS_FETCH:
                console.log('88888');
                return next(action);
            default:
                return next(action);
        }
    };
};

export default createGameMiddleWare;