import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom";
import "./Question5_1";
import { number1, number2 } from "./Question5_1";

function Question5_8() {
    const onIncrease = () => {
        number1.count1 += 10;
        console.log(number1);
    };
    const onDecrease = () => {
        number2.count2 += 30;
        console.log(number2);
    };
    const question_title = "Q8. 당신이 선호하는 IDE의 색은?";
    const btn1 = "#000000"; //30
    const btn2 = "#FFFFFF"; //10
    return (
        <div className="Question">
            <div className="container">
                <progress id="progressbar" value="88" max="100"></progress>
                <div
                    className="question_title"
                    // html 형태로 렌더링 허용
                >
                    {question_title}
                </div>

                <div className="buttons">
                    <Link to="./Question5_9" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onIncrease()}>{btn1}</Button>
                    </Link>
                    <br />
                    <Link to="./Question5_9" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onDecrease()}>{btn2}</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Question5_8;
