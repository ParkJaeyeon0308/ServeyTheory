import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom";
import "./Question3_1";
import { number1 } from "./Question3_1";

function Question3_7() {
    const onIncrease = () => {
        number1.count1 += 10;
        console.log(number1);
    };
    const onDecrease = () => {
        number1.count1 += 30;
        console.log(number1);
    };
    const question_title = "Q7. 당신이 직장에 가지고 있는 생각은?";
    const btn1 = "스타트업에 나온 남주혁처럼 잘생긴 사수가 기대된다"; //10
    const btn2 = "친근한 체크남방을 입은 동료가 상상된다"; //30
    return (
        <div className="Question">
            <div className="container">
                <progress id="progressbar" value="87.5" max="100"></progress>
                <div
                    className="question_title"
                    // html 형태로 렌더링 허용
                >
                    {question_title}
                </div>

                <div className="buttons">
                    <Link to="./Question3_8" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onIncrease()}>{btn1}</Button>
                    </Link>
                    <br />
                    <Link to="./Question3_8" style={{ textDecoration: "none" }}>
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
export default Question3_7;
