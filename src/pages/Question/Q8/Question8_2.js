import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom";
import "./Question8_1";
import { number1, number2 } from "./Question8_1";

function Question8_2() {
    const onIncrease = () => {
        number1.count1++;
        console.log(number1);
    };
    const onDecrease = () => {
        number2.count2++;
        console.log(number2);
    };
    const question_title = "Q2. 여러 언어를 공부하며 느끼는 감정은?";
    const btn1 = (
        <>
            줄 바꿈 때문에 세 시간 날리는 것보다
            <br /> 정해져 있어도 여러 줄 치는게 더 싫어
        </>
    ); //i
    const btn2 = "어렵고 복잡해도 한 번 배워두면 쓸모 있잖아"; //c
    return (
        <div className="Question">
            <div className="container">
                <progress id="progressbar" value="34" max="100"></progress>
                <div
                    className="question_title"
                    // html 형태로 렌더링 허용
                >
                    {question_title}
                </div>

                <div className="buttons">
                    <Link to="./Question8_3" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onIncrease()}>{btn1}</Button>
                    </Link>
                    <br />
                    <Link to="./Question8_3" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onDecrease()}>{btn2}</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Question8_2;
