import { createAction } from '../helpers';
import * as cnt from './constants';


export const showLoader = createAction(cnt.LOADER_SHOW);
export const hideLoader = createAction(cnt.LOADER_HIDE);

export const fetchFilms = createAction(cnt.FILMS_FETCH);
export const showErrorMessage = createAction(cnt.FILMS_ERROR);
export const filmsFetchSuccess = createAction(cnt.FILMS_SUCCESS);
