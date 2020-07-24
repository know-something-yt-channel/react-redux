import {createStore,combineReducers,applyMiddleware } from 'redux';
import user_reducer from './reducers/user_reducer';
import createSagaMiddleware from 'redux-saga';
import userSaga from './sagas/userSaga';

const sagaMiddleware = createSagaMiddleware();

const store =  createStore(combineReducers({user_reducer}), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(userSaga);

store.subscribe(()=>{
  console.log("latest state value :: ",store.getState() );
  
});
 

export default store;
