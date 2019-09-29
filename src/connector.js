import { connect } from 'react-redux';
import { fetchFilms } from './actions';

export const AppConnector = connect(state => state, {
    fetchFilms: (payload) => fetchFilms(payload)
});


// как оно преобразуется в dispatch? mapDispatchToProps должно вызывать dispatch, вопрос - где мы это делаем?