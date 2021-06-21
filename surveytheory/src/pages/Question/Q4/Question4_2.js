import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom";

export let str1 = { mbti1: "" };
function Question4_2() {
    const onIncrease = () => {
        str1.mbti1 += "G";
        console.log(str1);
    };
    const onDecrease = () => {
        str1.mbti1 += "A";
        console.log(str1);
    };
    const question_title = "Q2. 당신은 어느쪽에 더 소질이 있으세요?";
    const btn1 = "나는 평생 개발하면서 살고 싶어!"; //G
    const btn2 = "나는야 OA 마스터~"; //A
    return (
        <div className="Question">
            <div className="container">
                <progress id="progressbar" value="25" max="100"></progress>
                <div
                    className="question_title"
                    // html 형태로 렌더링 허용
                >
                    {question_title}
                </div>

                <div className="buttons">
                    <Link to="./Question4_3" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onIncrease()}>{btn1}</Button>
                    </Link>
                    <br />
                    <Link to="./Question4_3" style={{ textDecoration: "none" }}>
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
export default Question4_2;
