import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom";
import "./Question9_1";
import { number1, number2, number3, number4 } from "./Question9_1";

function Question9_3() {
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
    const onPlus4 = () => {
        number4.count4++;
        console.log(number4);
    };
    const question_title = "Q3. 당신은 회의할때 어떤 스타일 인가요?";
    const btn1 = '"무언가를 적지 않으면 불안해"'; //리더
    const btn2 = '"손으로 쓸 필요 없음! 잘 듣고 머리로 외우지 뭐"'; //부회장
    const btn3 = '"옆 친구가 뭐하는지 본다. 나 혼자 썼다가 욕먹을 것 같아"'; //평범
    const btn4 = '"배고파서 아무 생각도 들지 않는다"'; //버스타기 장인
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
                    <Link to="./Question9_4" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onPlus1()}>{btn1}</Button>
                    </Link>
                    <br />
                    <Link to="./Question9_4" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onPlus2()}>{btn2}</Button>
                    </Link>
                    <br />
                    <Link to="./Question9_4" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onPlus3()}>{btn3}</Button>
                    </Link>
                    <br />
                    <Link to="./Question9_4" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onPlus4()}>{btn4}</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Question9_3;
