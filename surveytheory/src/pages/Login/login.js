import React, { Component } from "react";
import { Link } from "react-router-dom"; //****
import { GoogleLogin } from "react-google-login";
import { Container, Row, Col } from "react-bootstrap";
import "./login.css";

// 커밋 테스트
const clientId =
    "600385616873-9ibcau1rto6jhqmrk8he88hh9tslhhj0.apps.googleusercontent.com";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            provider: ""
        };
    }
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
                                    <h6 className="account">or your account</h6>
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
                                        id="inputPhone"
                                        className="form-control"
                                        placeholder="비밀번호"
                                        name="phone"
                                        style={{ marginBottom: 20 }}
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
                                        onClick={this.handleOnClick}
                                    >
                                        {" "}
                                        로그인{" "}
                                    </button>
                                    <h6 className="no_have_account">
                                        no have account?
                                    </h6>
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

export default Login;
