const initialState = {};
const user_reducer = (state=initialState,action) => {
      switch (action.type) {
            case "LOGIN_USER" :
                  state.accountStatus = {'status':'success','message': 'User loggedin successfully!'} ;
            break;  
            default:
            break;      
      }
      return {...state};
};

export default user_reducer;
