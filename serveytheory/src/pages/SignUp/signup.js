import React, { Component } from "react";
import { Link } from "react-router-dom";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./signup.css";

const clientId = "OAuth Web Client ID";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            nick: "",
            pw: ""
        };
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleOnClick = (e) => {
        console.log(this.state.id, this.state.nick, this.state.pw);
    };
    render() {
        return (
            <div className="signup">
                <div className="container">
                    <h1 className="LoginHeader"> 회원가입 </h1>
                    <br></br>
                    <InputGroup className="mb-3" id="inputs">
                        <FormControl
                            style={{ fontSize: 25 }}
                            placeholder="닉네임"
                            aria-label="닉네임"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" id="button">
                                중복체크
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                    <input
                        type="id"
                        id="inputid"
                        className="form-control"
                        placeholder="ID"
                        name="id"
                        id="id_inputs"
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        id="inputPW"
                        className="form-control"
                        placeholder="비밀번호"
                        name="PW"
                        id="pw_inputs"
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        id="inputPWcheck"
                        className="form-control"
                        placeholder="비밀번호 확인"
                        name="PW_check"
                        id="pw_inputs"
                        onChange={this.handleChange}
                    />
                    <Link to="./Login">
                        <button
                            className="btn btn-lg btn-block"
                            type="button"
                            id="buttons"
                            onClick={this.handleOnClick}
                        >
                            {" "}
                            회원가입{" "}
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}
export default SignUp;
