import React, { Component } from "react"; 
import { Link } from "react-router-dom";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./signup.css";
import { json } from "body-parser";

const clientId = "OAuth Web Client ID";

export default class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            nick: "익명",
            pw: "",
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
          inText: this.state.text,
          inText1: this.state.pw,
          inText2: this.state.nick,
          inText3: this.state.pw2
        };
        

          // 중복이면 중복이라고 출력
          if(this.state.data == '아이디가 중복되었습니다. 다른 아이디로 가입해주세요!'){
            this.setState({
                data2: '아이디 중복확인을 다시해주세요.'
              });
          } 
          // 비밀번호가 다르면 다르다고 출력
          else if(this.state.pw != this.state.pw2){
            this.setState({
                data2: '비밀번호와 비밀번호 확인란이 다릅니다.'
              });
          }
          // 중복체크 안했으면 하라고 출력
          else if(this.state.data == ' '){
            this.setState({
                data3: '아이디 중복확인을 해주세요.'
              });
          }
           // 비밀번호끼리 같고 data가 중복이 아니면 넘김 + alert창
           else {
            fetch("http://localhost:3001/text", {
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
                    text: json.text,
                    pw: json.pw,
                    nick: json.nick,
                  });
                });

                this.setState({
                    data3: '회원가입 성공!'
                })
                alert('회원가입에 성공하셨습니다.')
                this.props.history.push('./');
           }
      };

      onclick1 = () => {
        const textbox = {
            inText3: this.state.text
          };
        fetch("http://localhost:3001/data", {
          method: "post", //통신방법
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(textbox)
        })
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
            if(json.count == '1'){ // count는 db에서 출력되는 컬럼명
                this.setState({
                    data: '아이디가 중복되었습니다. 다른 아이디로 가입해주세요!'
                })
            } else { // 중복되는 행의 개수가 0이면
                this.setState({
                    data: '아이디 사용이 가능합니다.' 
                })
            }
          });
      };


    handleOnClick = (e) => {
        console.log(this.state.id, this.state.nick, this.state.pw);
    };

    render() {
        return (
            <div className="signup">
                <div className="join">회원가입</div>
                <InputGroup className="mb-3" id="nick_input">
                    <FormControl
                        style={{ fontSize: "1.1em" }}
                        placeholder="아이디"
                        aria-label="아이디"
                        aria-describedby="basic-addon2"
                        name="text" // id -> text
                        onChange={this.handleChange}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" id="btn1"
                        onClick={this.onclick1}>
                            중복확인
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
                <h4>{this.state.data}</h4>
                <input
                    type="text"
                    id="inputid"
                    className="form-control"
                    placeholder="닉네임 (미입력시 기본값: 익명)"
                    name="nick" // id -> nick
                    id="id_inputs"
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    id="inputPW"
                    className="form-control"
                    placeholder="비밀번호"
                    name="pw"
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
               <h4>{this.state.data2}</h4>
                    <button
                        className="btn btn-lg btn-block"
                        type="submit"
                        id="btn2"
                        onClick={this.onclick}
                    >
                        회원가입
                    </button>
                <h4>{this.state.data3}</h4>    
               
            </div>
        );
    }
}
