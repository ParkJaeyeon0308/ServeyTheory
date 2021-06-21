import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import "./Question2_1";
import { Link } from "react-router-dom";
import { number1 } from "./Question2_1";

function Question2_5() {
    //0으로 초기값 설정
    const onIncrease = () => {
        number1.count1 += 20;
        console.log(number1);
    };
    const onDecrease = () => {
        number1.count1 += 10;
        console.log(number1);
    };
    const question_title = (
        <>
            Q5. 나 내일이 과제 마감인데 놀고싶어... <br />
            나랑 놀쟈.. 라고 하는 친구에게 당신은?
        </>
    );
    const btn1 = "내일이 제출이다 이 친구야!!! 빨리해!!!"; //20
    const btn2 = "내일의 너에게 맡겨ㅎ.... 같이 논다"; //10
    return (
        <div className="Question">
            <div className="container">
                <progress id="progressbar" value="70" max="100"></progress>
                <div
                    className="question_title"
                    // html 형태로 렌더링 허용
                >
                    {question_title}
                </div>

                <div className="buttons">
                    <Link to="./Question2_6" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onIncrease()}>{btn1}</Button>
                    </Link>
                    <br />
                    <Link to="./Question2_6" style={{ textDecoration: "none" }}>
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
export default Question2_5;
