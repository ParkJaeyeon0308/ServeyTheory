import React, { Component } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom";

export let number1 = { count1: 0 };
function Question2_1() {
    const onIncrease = () => {
        number1.count1 += 30;
        console.log(number1);
    };
    const onDecrease = () => {
        number1.count1 += 10;
        console.log(number1);
    };
    const question_title =
        "Q1. 다음주까지인 과제... 당신이라면 어떻게 하시겠습니까?";
    const btn1 = "오늘 끝내버리고 쉬자! 오늘 한다"; //30
    const btn2 = (
        <>
            과제는 원래 미룰 수 있을 때까지 미루는 거시여~
            <br />
            끝까지 미룬다
        </>
    ); //10
    return (
        <div className="Question">
            <div className="container">
                <progress id="progressbar" value="14" max="100"></progress>
                <div
                    className="question_title"
                    // html 형태로 렌더링 허용
                >
                    {question_title}
                </div>

                <div className="buttons">
                    <Link to="./Question2_2" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onIncrease()}>{btn1}</Button>
                    </Link>
                    <br />
                    <Link to="./Question2_2" style={{ textDecoration: "none" }}>
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
export default Question2_1;
