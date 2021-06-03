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
                <div className="join">회원가입</div>
                <InputGroup className="mb-3" id="nick_input">
                    <FormControl
                        style={{ fontSize: "1.1em" }}
                        placeholder="닉네임"
                        aria-label="닉네임"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" id="btn1">
                            중복체크
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
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
                    placeholder="비밀번호"
                    name="PW"
                    id="pw_inputs"
                    onChange={this.handleChange}
                />
                <input
                    type="text"
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
                        type="submit"
                        id="btn2"
                        onClick={this.handleOnClick}
                    >
                        {" "}
                        회원가입{" "}
                    </button>
                </Link>
            </div>
        );
    }
}
export default SignUp;
