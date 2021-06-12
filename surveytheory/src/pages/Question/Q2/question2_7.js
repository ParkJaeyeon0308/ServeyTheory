import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import "./Question2_1";
import { Link } from "react-router-dom";
import { number1, number2 } from "./Question2_1";

function Question2_7() {
    //0으로 초기값 설정
    const onIncrease = () => {
        number1.count1+=20;
        console.log(number1);
    };
    const onDecrease = () => {
        number2.count2+=10;
        console.log(number2);
    };
    // 70 - 100 : 101 - 130 : 131 - 170
    const question_title = "Q7. 나는 남들보다 구글링을 잘 하는 편이다.";
    const btn1 = "YES"; //20
    const btn2 = "NO"; //10
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
                    <Link to="/">
                        <Button onClick={() => onIncrease()}>{btn1}</Button>
                    </Link>
                    <br />
                    <Link to="/">
                        <Button onClick={() => onDecrease()}>{btn2}</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Question2_7;
