import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom";

export let number1 = { count1: 0 };
export let number2 = { count2: 0 };
function Question1_1() {
    const onIncrease = () => {
        number1.count1++; //web
        console.log(number1);
    };
    const onDecrease = () => {
        number2.count2++; //app
        console.log(number2);
    };
    const question_title = "Q1. 나의 휴대폰은?";
    const btn1 = "예쁜 디자인의 아이폰";
    const btn2 = "실용성이 최고지! 그 외의 폰";
    return (
        <div className="Question">
            <div className="container">
                <progress id="progressbar" value="17" max="100"></progress>
                <div
                    className="question_title"
                    // html 형태로 렌더링 허용
                >
                    {question_title}
                </div>

                <div className="buttons">
                    <Link to="./Question1_2" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onIncrease()}>{btn1}</Button>
                    </Link>
                    <br />
                    <Link to="./Question1_2" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onDecrease()}>{btn2}</Button>
                    </Link>
                </div>
                <img
                    className="mini-logo-question"
                    src="/images/logo/mini-logo.png"
                    alt="mini-logo"
                />
            </div>
        </div>
    );
}
export default Question1_1; //
