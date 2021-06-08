import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./quitAccount.css";

export default class QuitAccount extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            pw: "",
            data: ""
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
          });
    };

    onclick = () => {
        const textbox = {
          inText: this.state.id,
          inText1: this.state.pw,
          inText2: this.state.data
        };

        fetch("http://localhost:3001/withdraw", {
            method: "post", //통신방법
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(textbox)
            })
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                if(json.count == '1'){ // 아이디 비밀번호가 일치하면
                        fetch("http://localhost:3001/withdraw2", {
                        method: "post", //통신방법
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(textbox)
                        })
                        .then((res) => res.json())
                        .then((json) => {
                            console.log(json);
                            this.setState({
                                id: json.id,
                                pw: json.pw
                            })  
                        });
                        this.setState({
                            data: '회원탈퇴 성공.'
                        })
                        alert('정상적으로 회원탈퇴 되셨습니다. 그동안 감사했습니다.')
                        this.props.history.push('./');
                } else { // 일치하는 행이 하나도 없으면
                    this.setState({
                        data: '아이디와 비밀번호가 일치하지 않습니다.'
                    })
                }
            });
      };

    render() {
        return (
            <div className="quit_account">
                <div className="account">회원탈퇴</div>
                <input
                    type="text"
                    id="inputid"
                    className="form-control"
                    placeholder="ID"
                    name="id"
                    id="id_inputs"
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    id="inputPW"
                    className="form-control"
                    placeholder="기존 비밀번호"
                    name="pw"
                    id="pw_inputs"
                    onChange={this.handleChange}
                />
                
                <h4>{this.state.data}</h4>
                    <button
                        className="btn btn-lg btn-block"
                        type="submit"
                        id="btn2"
                        onClick={this.onclick}
                        
                    >
                        Confirm
                    </button>
                
            </div>
        );
    }
}