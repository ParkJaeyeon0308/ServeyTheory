import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom";

export let number1 = { count1: 0 };
export let number2 = { count2: 0 };
export let number3 = { count3: 0 };
function Question6_1() {
    const onPlus1 = () => {
        number1.count1++;
        console.log(number1);
    };
    const onPlus2 = () => {
        number2.count2++;
        console.log(number2);
    };
    const onPlus3 = () => {
        number3.count3++;
        console.log(number3);
    };
    const question_title = "Q1. 전공수업을 배우면서 느끼는 감정은?";
    const btn1 = "배워서 써먹느라 바쁜것 같다"; //D
    const btn2 = (
        <>
            한 가지 분야로 제대로 실력을 쌓아야지.
            <br /> 이 길이 내 길이다!
        </>
    ); //S
    const btn3 = "다른 분야에도 관심이 있어 재밌을 것 같다"; //W
    return (
        <div className="Question">
            <div className="container">
                <progress id="progressbar" value="17" max="100"></progress>
                <div
                    className="question_title"
                    // html 형태로 렌더링 허용
                >
                    {question_title}
                </div>

                <div className="buttons">
                    <Link to="./Question6_2" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onPlus1()}>{btn1}</Button>
                    </Link>
                    <br />
                    <Link to="./Question6_2" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onPlus2()}>{btn2}</Button>
                    </Link>
                    <br />
                    <Link to="./Question6_2" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onPlus3()}>{btn3}</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Question6_1;
