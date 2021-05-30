import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./quitAccount.css";

class QuitAccount extends Component {
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
                    name="PW"
                    id="pw_inputs"
                    onChange={this.handleChange}
                />
                <Link to="./">
                    <button
                        className="btn btn-lg btn-block"
                        type="submit"
                        id="btn2"
                        // onClick={this.handleOnClick}
                        onClick={() => alert("정상적으로 처리되었습니다.")}
                    >
                        Confirm
                    </button>
                </Link>
            </div>
        );
    }
}

export default QuitAccount;
