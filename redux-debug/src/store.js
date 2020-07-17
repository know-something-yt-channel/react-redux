import {createStore,combineReducers,applyMiddleware,compose } from 'redux';
import user_reducer from './reducers/user_reducer';
import createSagaMiddleware from 'redux-saga';
import userSaga from './sagas/userSaga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = typeof window === 'object' &&
                            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
                              window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                                // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
                                trace: true
                              }) : compose;

const store =  createStore(combineReducers({user_reducer}), 
          composeEnhancers( applyMiddleware(sagaMiddleware) ));

sagaMiddleware.run(userSaga);

store.subscribe(()=>{
  console.log("latest state value :: ",store.getState() );
  
});
 

export default store;
