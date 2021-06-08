import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./passChange.css";

export default class PassChange extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            pw: "",
            pw1: " ",
            pw2: " ",
            data: " ",
            data2: "",
            data3: ""
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
          inText2: this.state.pw1,
          inText3: this.state.pw2
        };

        fetch("http://localhost:3001/change1", {
            method: "post", //통신방법
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(textbox)
            })
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                if(json.count == '1'){ // 아이디 비밀번호가 일치하고
                    if(this.state.pw1 != ' ' && this.state.pw1 == this.state.pw2){ // 변경후 비밀번호와 비밀번호 확인이 같으면 변경
                        fetch("http://localhost:3001/change2", {
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
                            data: '비밀번호 변경 성공.'
                        })
                        alert('비밀번호를 성공적으로 변경했습니다.')
                        this.props.history.push('./');
                    } else if(this.state.pw1 == ' '){
                        this.setState({
                            data: '비밀번호 변경 칸은 비워둘 수 없습니다.'
                        })
                    } 
                    else { // 비밀번호와 비밀번호 확인이 다르면
                        this.setState({
                            data: '비밀번호와 비밀번호 확인란이 다릅니다.'
                        })
                    }
                } else { // 일치하는 행이 하나도 없으면
                    this.setState({
                        data: '아이디와 비밀번호가 일치하지 않습니다.'
                    })
                }
            });
      };
    

    render() {
        return (
            <div className="pass_change">
                <div className="account">비밀번호 변경</div>
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
                <input
                    type="text"
                    id="inputNewPW"
                    className="form-control"
                    placeholder="새 비밀번호"
                    name="pw1"
                    id="pw_inputs"
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    id="inputPWcheck"
                    className="form-control"
                    placeholder="비밀번호 확인"
                    name="pw2"
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

