// 세션
import React, { Component } from "react";
import { Link } from "react-router-dom"; //****
import { GoogleLogin } from "react-google-login";
import { Container, Row, Col } from "react-bootstrap";
import "./login.css";

export let user_id = { user_id: "novalue" };

// 커밋 테스트
const clientId =
    "600385616873-9ibcau1rto6jhqmrk8he88hh9tslhhj0.apps.googleusercontent.com";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            pw: "",
            name: "",
            provider: "",
            data: ""
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onclick = () => {
        const textbox = {
            inText: this.state.id,
            inText1: this.state.pw
        };
        fetch("http://localhost:3001/login", {
            // server.js의 login 메소드 사용
            method: "post", //통신방법
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(textbox) // 위에 정의한 textbox
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                if (json.count == "1") {
                    // count는 db에서 출력되는 컬럼명
                    this.setState({
                        // 아이디와 비밀번호가 같은 행이 1이상 존재하면 로그인 성공
                        data: "로그인 성공! (메인화면이동)" // 유효성 검사 메시지
                    });
                    user_id.user_id = textbox.inText;
                    console.log("user_id: " + user_id.user_id);
                    this.props.history.push("./");
                } else {
                    // 중복되는 행의 개수가 0이면
                    this.setState({
                        data: "아이디와 비밀번호가 일치하지 않습니다." // 유효성 검사 메시지
                    });
                }
            });
    };

    handleOnClick = (e) => {
        console.log(this.state.id, this.state.pw);
    };

    // Google Login
    responseGoogle = (res) => {
        console.log(res);
    };

    // Login Fail
    responseFail = (err) => {
        console.error(err);
    };
    render() {
        return (
            <div className="login">
                <center>
                    <Container fluid>
                        <Row>
                            <Col className="row1">
                                <div className="input">
                                    <h4 className="text1"> LOGIN </h4>
                                    <GoogleLogin
                                        className="googleLogin"
                                        clientId={clientId}
                                        buttonText="Google 로그인"
                                        onSuccess={this.responseGoogle}
                                        onFailure={this.responseFail}
                                    />
                                    <div className="account_text">
                                        or your account
                                    </div>
                                    <input
                                        type="id"
                                        id="inputid"
                                        className="form-control"
                                        placeholder="ID"
                                        name="id"
                                        style={{ marginBottom: 20 }}
                                        onChange={this.handleChange}
                                    />
                                    <input
                                        type="password"
                                        id="inputPw"
                                        className="form-control"
                                        placeholder="비밀번호"
                                        name="pw"
                                        style={{
                                            marginBottom: 20
                                        }}
                                        onChange={this.handleChange}
                                    />

                                    <button
                                        className="btn btn-lg btn-block"
                                        type="button"
                                        style={{
                                            backgroundColor:
                                                "rgb(255, 230, 171)",
                                            color: "rgb(24, 70, 83)",
                                            fontSize: "1.1rem",
                                            padding: "1rem",
                                            marginTop: "2rem"
                                        }}
                                        onClick={this.onclick}
                                    >
                                        {" "}
                                        로그인{" "}
                                    </button>

                                    <h4>{this.state.data}</h4>
                                    <div className="no_have_account">
                                        no have account?
                                    </div>
                                </div>
                            </Col>
                            <Col className="row2">
                                <div className="texts">
                                    <p>계정이 없으신가요?</p>
                                    <p>지금 바로 회원가입 하세요!</p>
                                </div>
                                <Link to="./SignUp">
                                    <button
                                        className="btn btn-lg btn-block"
                                        type="button"
                                        style={{
                                            backgroundColor: "white",
                                            color: "rgb(24, 70, 83)",
                                            fontSize: "1.1em",
                                            marginTop: "2rem",
                                            width: "20rem",
                                            padding: "1rem"
                                        }}
                                        onClick={this.handleOnClick}
                                    >
                                        {" "}
                                        회원가입{" "}
                                    </button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </center>
            </div>
        );
    }
}