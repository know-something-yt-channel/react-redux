import {createStore,combineReducers} from 'redux';
import user_reducer from './reducers/user_reducer';


const store =  createStore(combineReducers({user_reducer}));
store.subscribe(()=>{
  console.log("latest state value :: ",store.getState() );
  
});
 

export default store;
