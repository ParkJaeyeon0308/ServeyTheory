import React, { useState } from "react";
import "../question.css";
import Button from "../../../component/Button";
// import { Component } from "react";

function Q1_1(){
        const [number, setNumber] = useState(0);

        const onIncrease = () => {
            setNumber(number + 1);
        }

        const onDecrease = () => {
            setNumber(number - 1);
        }
        render() {
            const Q_title = this.props.Q_title;
            const Btn1 = this.props.Btn1;
            const Btn2 = this.props.Btn2;
    
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="10" max="100"></progress>
                    <div
                        className="Q_title"
                        // html 형태로 렌더링 허용
                        dangerouslySetInnerHTML={{ __html: Q_title }}
                    ></div>
                    <div className="buttons">
                        <Button
                            onClick={() =>
                                this.props.history.push(onIncrease()),
                                this.props.history.push("/question1_2"),
                                console.log()
                            }
                        >
                            <div
                                className="Btn1"
                                // html 형태로 렌더링 허용
                                dangerouslySetInnerHTML={{ __html: Btn1 }}
                            ></div>
                        </Button>
                        <br />

                        <Button
                            onClick={() =>
                                this.props.history.push(onDecrease()),
                                this.props.history.push("/question1_2"),
                                console.log()
                            }
                        >
                            <div
                                className="Btn2"
                                // html 형태로 렌더링 허용
                                dangerouslySetInnerHTML={{ __html: Btn2 }}
                            ></div>
                        </Button>
                    </div>
                </div>
            </div>
        );
    };
};

// 기본 props 값
Q1_1.defaultProps = {
    Q_title: "Q1. 나의 휴대폰은?",
    Btn1: "예쁜 디자인의 아이폰",
    Btn2: "실용성이 최고지! 그 외의 폰"
};

export default Q1_1;
