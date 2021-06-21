import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom";
import "./Question5_1";
import { number1, number2 } from "./Question5_1";

function Question5_5() {
    const onIncrease = () => {
        number1.count1 += 30;
        console.log(number1);
    };
    const onDecrease = () => {
        number2.count2 += 10;
        console.log(number2);
    };
    const question_title = "Q5. '!♥!!!' 하트의 위치는?";
    const btn1 = "1"; //30
    const btn2 = "2"; //10
    return (
        <div className="Question">
            <div className="container">
                <progress id="progressbar" value="55" max="100"></progress>
                <div
                    className="question_title"
                    // html 형태로 렌더링 허용
                >
                    {question_title}
                </div>

                <div className="buttons">
                    <Link to="./Question5_6" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onIncrease()}>{btn1}</Button>
                    </Link>
                    <br />
                    <Link to="./Question5_6" style={{ textDecoration: "none" }}>
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
export default Question5_5;
