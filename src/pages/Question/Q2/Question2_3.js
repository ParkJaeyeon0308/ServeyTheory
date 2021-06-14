import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import "./Question2_1";
import { Link } from "react-router-dom";
import { number1, number2 } from "./Question2_1";

function Question2_3() {
    //0으로 초기값 설정
    const onIncrease = () => {
        number1.count1+=10;
        console.log(number1);
    };
    // const onDecrease = () => {
    //     number2.count2+=30;
    //     number1.count1 + 10;
    //     console.log(number1);
    // };
    const onDecrease = () => {
        number2.count2 += 30;
        console.log(number2);
    };
    const question_title = "Q3. 당신의 과제 제출은?";
    const btn1 = "과제를 늦게 제출해 본 적이 있다"; //10
    const btn2 = "내 사전에 과제 늦게 제출이란 없지!"; //30
    return (
        <div className="Question">
            <div className="container">
                <progress id="progressbar" value="35" max="100"></progress>
                <div
                    className="question_title"
                    // html 형태로 렌더링 허용
                >
                    {question_title}
                </div>

                <div className="buttons">
                    <Link to="./Question2_4">
                        <Button onClick={() => onIncrease()}>{btn1}</Button>
                    </Link>
                    <br />
                    <Link to="./Question2_4">
                        <Button onClick={() => onDecrease()}>{btn2}</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Question2_3;
