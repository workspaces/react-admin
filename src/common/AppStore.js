import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects'; 
import AppReducer from './AppReducer';
import AppSaga from './AppSaga';

let appReducer = new AppReducer();
const reducers = appReducer.getReducers();
// console.log(reducers);

let appSaga = new AppSaga();
const sagas = appSaga.getSagas();
// console.log(sagas);

const sagaMiddleware = createSagaMiddleware();

const AppStore = () => {
    const store = createStore(
        combineReducers(reducers),
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(function* (){
        yield all(sagas);
    });
    return store;
}

export default AppStore;