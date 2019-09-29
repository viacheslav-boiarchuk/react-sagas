import * as cnt from '../actions/constants';

const initialState = {
    filmName: '',
    hasError: false,
    isFetching: false,
    errorMessage: null,
    filmInfo: {}
};

export const omdb = (state = initialState, { type, payload }) => {

    switch(type) {
        case cnt.FILMS_FETCH:
            return {
                ...state,
                isFetching: true,
                hasError: false
            };

        case cnt.LOADER_SHOW:
            console.log('vivat!');
            return {
                ...state
            };

        case cnt.FILMS_SUCCESS:
            return {
                ...state,
                filmInfo: payload
            };

        case cnt.FILMS_ERROR:
            return {
                ...state,
                hasError: true,
                errorMessage: payload
            };

        default:
            return state;
    }
};