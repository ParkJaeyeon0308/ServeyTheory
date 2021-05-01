import React, { Component } from 'react';
import { Link } from 'react-router-dom' //****
import './SignInUp.css';

class Login extends Component{ 
    render(){ 
  return (
      <div>
          <div className="input">
          <center>
        <h2 className="LoginHeader"> 로그인 </h2></center>
      <input type="id" id="inputid" className="form-control" placeholder="ID" name="id" style={{marginBottom:20}} onChange={this.handleChange}/>
      <input type="password" id="inputPhone" className="form-control" placeholder="비밀번호" name="phone" style={{marginBottom:20}} onChange={this.handleChange}/>
    <Link to="./SignUp"> 
    <button className="btn btn-lg btn-block" type="button" style={{backgroundColor:"#fffadd", color:"#102f57"}} onClick={this.handleOnClick}> 로그인 </button>
  </Link>
  </div>
  </div>
  );
    };
}

export default Login;