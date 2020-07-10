import {put,takeLatest} from 'redux-saga/effects'; 

function* addUser(){
    yield put( {type:'ADD_USER_SUCCESS',payload:'User saved successfully!'} );
}

export default function* userSaga(){
    yield takeLatest('ADD_USER',addUser);
}; 