import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom";
import "./Question8_1";
import { number1, number2 } from "./Question8_1";

function Question8_3() {
    const onIncrease = () => {
        number1.count1++;
        console.log(number1);
    };
    const onDecrease = () => {
        number2.count2++;
        console.log(number2);
    };
    const question_title = "Q3. 실행 속도는 어떻게 생각하나요?";
    const btn1 = "실행 속도는 상관없다. 에러만 안나면 좋다"; //i
    const btn2 = "느리면 코드 쓸 맛이 안 난다"; //c
    return (
        <div className="Question">
            <div className="container">
                <progress id="progressbar" value="51" max="100"></progress>
                <div
                    className="question_title"
                    // html 형태로 렌더링 허용
                >
                    {question_title}
                </div>

                <div className="buttons">
                    <Link to="./Question8_4" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onIncrease()}>{btn1}</Button>
                    </Link>
                    <br />
                    <Link to="./Question8_4" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onDecrease()}>{btn2}</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Question8_3;
