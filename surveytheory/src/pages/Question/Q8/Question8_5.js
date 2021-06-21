import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom";
import "./Question8_1";
import { number1, number2 } from "./Question8_1";

function Question8_5() {
    const onIncrease = () => {
        number2.count2++;
        console.log(number2);
    };
    const onDecrease = () => {
        number1.count1++;
        console.log(number1);
    };
    const question_title = "Q5. 구글링할때 나는?";
    const btn1 = "자료가 한 번에 나오지 않으면 울고싶다"; //c
    const btn2 = "자료가 잘 안나오면 자극이 온다"; //i
    return (
        <div className="Question">
            <div className="container">
                <progress id="progressbar" value="85" max="100"></progress>
                <div
                    className="question_title"
                    // html 형태로 렌더링 허용
                >
                    {question_title}
                </div>

                <div className="buttons">
                    <Link to="./Question8_6" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onIncrease()}>{btn1}</Button>
                    </Link>
                    <br />
                    <Link to="./Question8_6" style={{ textDecoration: "none" }}>
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
export default Question8_5;
