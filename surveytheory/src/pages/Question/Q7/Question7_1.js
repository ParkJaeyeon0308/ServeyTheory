import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom";

export let number1 = { count1: 0 };
export let number2 = { count2: 0 };
export let number3 = { count3: 0 };
export let number4 = { count4: 0 };
function Question7_1() {
    const onPlus1 = () => {
        number2.count2++;
        console.log(number2);
    };
    const onPlus2 = () => {
        number3.count3++;
        console.log(number3);
    };
    const onPlus3 = () => {
        number4.count4++;
        console.log(number4);
    };
    const onPlus4 = () => {
        number1.count1++;
        console.log(number1);
    };
    const question_title = "Q1. 코딩할때 나는?";
    const btn1 = "별 것 아니여도 눈에 보이면 뿌듯하다"; //F
    const btn2 = (
        <>
            중요한 코드를 제대로 보지 <br />이 외의 요소들은 신경쓰기 복잡하다
        </>
    ); //FB
    const btn3 = "짧고 굵은 기능이 확실하고 머리에 쏙 들어온다"; //BF
    const btn4 = (
        <>
            별 볼일 없어 보여도 실용성만 있다면 <br />
            100점짜리 개발이라고 생각한다
        </>
    ); //B
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
                    <Link to="./Question7_2" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onPlus1()}>{btn1}</Button>
                    </Link>
                    <br />
                    <Link to="./Question7_2" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onPlus2()}>{btn2}</Button>
                    </Link>
                    <br />
                    <Link to="./Question7_2" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onPlus3()}>{btn3}</Button>
                    </Link>
                    <br />
                    <Link to="./Question7_2" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onPlus4()}>{btn4}</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Question7_1;
