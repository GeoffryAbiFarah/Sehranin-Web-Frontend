import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index'
import {postPartySaga} from './sagas/postPartySaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);
const store = createStore(rootReducer,{},middleware);

sagaMiddleware.run(postPartySaga);

export default store;