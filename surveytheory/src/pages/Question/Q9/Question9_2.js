import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom";
import "./Question9_1";
import { number1, number2, number3, number4 } from "./Question9_1";

function Question9_2() {
    const onPlus1 = () => {
        number3.count3++;
        console.log(number3);
    };
    const onPlus2 = () => {
        number2.count2++;
        console.log(number2);
    };
    const onPlus3 = () => {
        number1.count1++;
        console.log(number1);
    };
    const onPlus4 = () => {
        number4.count4++;
        console.log(number4);
    };
    const question_title = (
        <>
            Q2. 밤새고 다음날 또 새벽 3시
            <br /> 당신은 어떤 모습인가요?
        </>
    );
    const btn1 = '"너무 졸려서 죽을 것 같아 죽기 싫어!"'; //평범
    const btn2 = '"죽을거 같긴 한데 오늘 못 하면 내일 죽는다"'; //부회장
    const btn3 = '"하나님은 버티지 못 할 시련을 주시지 않는다"'; //리더
    const btn4 = '"zzZ..."'; //버스타기 장인
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
                    <Link to="./Question9_3" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onPlus1()}>{btn1}</Button>
                    </Link>
                    <br />
                    <Link to="./Question9_3" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onPlus2()}>{btn2}</Button>
                    </Link>
                    <br />
                    <Link to="./Question9_3" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onPlus3()}>{btn3}</Button>
                    </Link>
                    <br />
                    <Link to="./Question9_3" style={{ textDecoration: "none" }}>
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
export default Question9_2;
