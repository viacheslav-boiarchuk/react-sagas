import { connect } from 'react-redux';
import { fetchFilms } from './actions';

export const AppConnector = connect(state => state, {
    fetchFilms: (payload) => fetchFilms(payload)
});