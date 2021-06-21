import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import "./Question1_1";
import { Link } from "react-router-dom";
import { number1, number2 } from "./Question1_1";

function Question1_3() {
    //0으로 초기값 설정
    const onIncrease = () => {
        number1.count1++;
        console.log(number1);
    };
    const onDecrease = () => {
        number2.count2++;
        console.log(number2);
    };
    const question_title = "Q3. 내가 더 자주 사용하는 것은?";
    const btn1 = "노트북이나 데스크탑";
    const btn2 = "휴대폰이나 아이패드";
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
                    <Link to="./Question1_4" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onIncrease()}>{btn1}</Button>
                    </Link>
                    <br />
                    <Link to="./Question1_4" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onDecrease()}>{btn2}</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Question1_3;
