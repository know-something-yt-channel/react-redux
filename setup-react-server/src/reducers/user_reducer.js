const initialState = {};
const user_reducer = (state=initialState,action) => {
     
      switch (action.type) {
            case "ADD_USER_SUCCESS" :
                  state.accountStatus = {'status':'success','message': action.payload} ;
            break;  
            default:
            break;      
      }
      return {...state};
};

export default user_reducer;
