import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Container,Row,Col } from 'react-bootstrap';
import './SignUp.css';

const clientId = "OAuth Web Client ID";

class SignUp extends Component{ 
    constructor(props) { 
        super(props); this.state = { 
            id: "", nick: "", pw: ""
        }; 
    }; 
    handleChange = (e) => { 
        this.setState({ [e.target.name]: e.target.value 
        }); 
    }; 
    handleOnClick = (e) => { 
        console.log(this.state.id, this.state.nick, this.state.pw); 
    }; render(){ 
        return (
        <center>
        <h2 className="LoginHeader"> 회원가입 </h2>
        <div style={{width:400}}><input type="nickname" id="inputNick" className="form-control" placeholder="닉네임" name="nickname" style={{marginBottom:20}} onChange={this.handleChange}/>
        <button className="btn btn-lg btn-block" type="button" onClick={this.handleOnClick}>중복확인</button></div>
         <input type="id" id="inputid" className="form-control" placeholder="ID" name="id" style={{marginBottom:20}} onChange={this.handleChange}/>
          <input type="password" id="inputPhone" className="form-control" placeholder="비밀번호" name="phone" style={{marginBottom:20}} onChange={this.handleChange}/>
            <Link to="./Login">
           <button className="btn btn-lg btn-block" type="button" style={{backgroundColor:"#fffadd", color:"#102f57"}} onClick={this.handleOnClick}> 회원가입 </button> 
           </Link></center>
           ); 
        }; 
    } export default SignUp;
