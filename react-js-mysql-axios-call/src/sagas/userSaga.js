import {call, put,takeLatest} from 'redux-saga/effects';
import axios from "axios";


function axiosCall(userInfo){
   return axios({
        method : "POST",
        url : "/api/adduser",
        headers: {'content-type':'application/json'},
        data : JSON.stringify(userInfo)
    })
    .then(response => response.data);

}


function* addUser(userInfo){
    console.log("register request ", userInfo);
    let msg = '';
    const userInfoObj = {
        username: userInfo.payload.username,
        email : userInfo.payload.email,
        password : userInfo.payload.password
    };
   const resp =  yield call(axiosCall,userInfoObj);
   console.log("response ::", resp);
    if(resp.id){
        msg = 'User added successfully';
    } else {
        msg = "User NOT added successfully";
    }

     yield put( {type:"ADD_USER_SUCCESS",payload:msg}  );
   
}

export default function* userSaga() {
    yield takeLatest("ADD_USER", addUser);

};