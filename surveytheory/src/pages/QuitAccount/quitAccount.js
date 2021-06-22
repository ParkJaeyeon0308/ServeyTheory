import React from "react";
import "./quitAccount.css";

import Rodal from "rodal";
import "rodal/lib/rodal.css";

export default class QuitAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            pw: "",
            data: "",
            visible: false
        };
    }

    // show 메소드를 선언하고, show를 호출하면 state visible을 true로 setState한다.
    show() {
        this.setState({ visible: true });
    }
    // hide 메소드를 선언하고, hide를 호출하면 state visible을 false로 setState한다.
    hide() {
        this.setState({ visible: false });
        this.props.history.push("/");
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onclick = () => {
        const textbox = {
            inText: this.state.id,
            inText1: this.state.pw,
            inText2: this.state.data
        };

        fetch("http://localhost:3001/withdraw", {
            // server.js의 withdraw 메소드 ( 회원여부 확인 )
            method: "post", //통신방법
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(textbox)
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                if (json.count == "1") {
                    // 아이디 비밀번호가 일치하면 ( 일치하는 행이 1개이면 )
                    fetch("http://localhost:3001/withdraw2", {
                        // withdraw2 메소드 ( 회원정보 삭제 )
                        method: "post", //통신방법
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(textbox)
                    })
                        .then((res) => res.json())
                        .then((json) => {
                            console.log(json);
                            this.setState({
                                id: json.id,
                                pw: json.pw
                            });
                        });
                    this.setState({
                        data: "회원탈퇴 성공." // 유효성검사 메시지
                    });
                    // alert(
                    //     "정상적으로 회원탈퇴 되셨습니다. 그동안 감사했습니다."
                    // );
                    this.props.history.push("/");
                } else {
                    // 일치하는 행이 하나도 없으면
                    this.setState({
                        data: "아이디와 비밀번호가 일치하지 않습니다." // 유효성검사 메세지
                    });
                }
            });
    };

    render() {
        return (
            <div className="quit_account">
                <div id="box">
                    <div className="quitAccount_box">
                        <div className="left-box-quit">
                            <img
                                className="mini-logo-quit"
                                src="/images/logo/mini-logo.png"
                                alt="mini-logo"
                            />
                        </div>
                        <div className="right-box-quit">
                            <p className="account">회원탈퇴</p>
                            <input
                                type="id"
                                className="form-control"
                                placeholder="ID"
                                name="id"
                                id="id_inputs-quit"
                                onChange={this.handleChange}
                            />
                            <input
                                type="password"
                                className="form-control"
                                placeholder="PW"
                                name="pw"
                                id="pw_inputs-quit"
                                onChange={this.handleChange}
                            />

                            <h4>{this.state.data}</h4>
                            <a href={() => false} onClick={this.onclick}>
                                <button
                                    className="btn btn-lg btn-block"
                                    type="submit"
                                    id="quit-btn"
                                    onClick={this.show.bind(this)}
                                >
                                    확인
                                </button>
                                <Rodal
                                    visible={this.state.visible}
                                    onClose={this.hide.bind(this)}
                                    className="rodal-slideDown-enter rodal-outermost"
                                    animation="slideDown"
                                    width="450"
                                    height="300"
                                    showCloseButton="false"
                                >
                                    <div className="rodal-container">
                                        <div className="rodal-wrapper">
                                            <span className="rodal-msg">
                                                정상적으로 회원 탈퇴 되었습니다.{" "}
                                                <br />
                                                서비스를 이용해주셔서
                                                감사합니다. :-)
                                            </span>
                                        </div>
                                    </div>
                                </Rodal>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
