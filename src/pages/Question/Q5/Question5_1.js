import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom";

export let number1 = { count1: 0 };
export let number2 = { count2: 0 };
function Question5_1() {
    const onIncrease = () => {
        number1.count1 += 30;
        console.log(number1);
    };
    const onDecrease = () => {
        number2.count2 += 10;
        console.log(number2);
    };
    const question_title = "Q1. 1023이라는 숫자가 왠지 모르게 불편하다.";
    const btn1 = "YES"; //30
    const btn2 = "NO"; //10
    return (
        <div className="Question">
            <div className="container">
                <progress id="progressbar" value="11" max="100"></progress>
                <div
                    className="question_title"
                    // html 형태로 렌더링 허용
                >
                    {question_title}
                </div>

                <div className="buttons">
                    <Link to="./Question5_2" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onIncrease()}>{btn1}</Button>
                    </Link>
                    <br />
                    <Link to="./Question5_2" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onDecrease()}>{btn2}</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Question5_1;
