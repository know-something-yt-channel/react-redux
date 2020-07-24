import { put,takeLatest} from 'redux-saga/effects';



function* addUser(userInfo){
    yield put( {type:"ADD_USER_SUCCESS",payload:"User added successfully!"}  );
   
}

export default function* userSaga() {
    yield takeLatest("ADD_USER", addUser);

};