import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom";
import "./Question7_1";
import { number1, number2, number3, number4 } from "./Question7_1";

function Question7_4() {
    const onPlus1 = () => {
        number4.count4++;
        console.log(number4);
    };
    const onPlus2 = () => {
        number3.count3++;
        console.log(number3);
    };
    const onPlus3 = () => {
        number2.count2++;
        console.log(number2);
    };
    const onPlus4 = () => {
        number1.count1++;
        console.log(number1);
    };
    const question_title =
        "Q4. 프로젝트 기획을 하면서 중요하게 생각하는 부분은?";
    const btn1 = "사용자의 접촉점을 먼저 생각한다"; //BF
    const btn2 = "문화와 관련된 것들이 가장 실용도가 높다"; //FB
    const btn3 = (
        <>
            화면의 구성이 편하지 않으면 기능의 효과를 <br /> 제대로 전달할 수
            없다고 생각한다
        </>
    ); //F
    const btn4 = "항상 생활을 하며 불편했던 부분들을 먼저 꺼내본다"; //B
    return (
        <div className="Question">
            <div className="container">
                <progress id="progressbar" value="68" max="100"></progress>
                <div
                    className="question_title"
                    // html 형태로 렌더링 허용
                >
                    {question_title}
                </div>

                <div className="buttons">
                    <Link to="./Question7_5" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onPlus1()}>{btn1}</Button>
                    </Link>
                    <br />
                    <Link to="./Question7_5" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onPlus2()}>{btn2}</Button>
                    </Link>
                    <br />
                    <Link to="./Question7_5" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onPlus3()}>{btn3}</Button>
                    </Link>
                    <br />
                    <Link to="./Question7_5" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onPlus4()}>{btn4}</Button>
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
export default Question7_4;
