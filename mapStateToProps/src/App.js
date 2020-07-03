import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
   
  constructor (props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleSubmit (event) {
    event.preventDefault();
    const data = new FormData(event.target) ;
    const email = data.get('email');
    const password = data.get('password');
    console.log("form data :", email + " ---- " + password) ;
    this.props.loginUser(email,password);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
           To get started, edit <code>src/App.js</code> and save to reload.
        </p>
         { this.props.accountStatus.status  ? this.props.accountStatus.message : '' }
        <h3>Login </h3>
        <form  onSubmit={this.handleSubmit} autoComplete="off">
            <label> Email </label>
            <input type="text" name="email" id="email" />
            <br/><br/>
            <label> Password </label>
            <input type="password" name="password" id="password" />
            <br/><br/>
            <input type="submit" name="submit" id="submit" />
        </form>  
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state => ", state);
  return {
    accountStatus : state.user_reducer.accountStatus ?  state.user_reducer.accountStatus : ''
  };
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (email, password) => {
    dispatch( { type:'LOGIN_USER' , payload : {email, password} } );
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

