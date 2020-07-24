import React, { useState,useEffect }  from 'react';
import {connect} from 'react-redux';

function Signup (props) {
  const [accountStatus, setAccountStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target) ;
    const username = data.get('username');
    const email = data.get('email');
    const password = data.get('password');
    console.log("form data :", email + " ---- " + password) ;
    props.createUser(email,password,username);
  }
  
  useEffect(() => {
    const msg = props.accountStatus.status  ? props.accountStatus.message : '';
    setAccountStatus(msg);
  }, [props.accountStatus]);
  
    return (
      <div>
         { accountStatus }
        <h2>Signup</h2>
        
        <form  onSubmit={handleSubmit} >
            <label> Username </label>
            <input type="text" name="username" id="username" />
            <br/><br/>
            <label> Email </label>
            <input type="text" name="email" id="email" />
            <br/><br/>
            <label> Password </label>
            <input type="password" name="password" id="password" />
            <br/><br/>
            <button type="submit">Submit </button>
        </form>  
      </div>
    );
  }
  function mapStateToProps(state) {
    console.log("state => ", state);
    return {
      accountStatus : state.user_reducer.accountStatus ?  state.user_reducer.accountStatus : ''
    };
  }
  
  
  const mapDispatchToProps = (dispatch) => ({
    
    createUser: (email, password,username) => {
      console.log("1-------");
      dispatch( { type:'ADD_USER' , payload : {email, password,username} } );
    },
  
  });
  export default connect(mapStateToProps, mapDispatchToProps)(Signup);
