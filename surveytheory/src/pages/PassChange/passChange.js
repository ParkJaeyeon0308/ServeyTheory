import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./passChange.css";

class PassChange extends Component {
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
                    name="PW"
                    id="pw_inputs"
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    id="inputNewPW"
                    className="form-control"
                    placeholder="새 비밀번호"
                    name="newPW"
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
                <Link to="./">
                    <button
                        className="btn btn-lg btn-block"
                        type="submit"
                        id="btn2"
                        onClick={this.handleOnClick}
                    >
                        Confirm
                    </button>
                </Link>
            </div>
        );
    }
}

export default PassChange;
