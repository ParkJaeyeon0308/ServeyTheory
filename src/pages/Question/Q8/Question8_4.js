import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 
import "./Question8_1";
import { number1, number2 } from "./Question8_1";

function Question8_4(){
    const onIncrease = () => {number1.count1++
    console.log(number1)};
    const onDecrease = () => {number2.count2++
        console.log(number2)};
        const question_title = "Q4. 더 짜릿한 순간은?";
        const btn1 ="코드로 눈에 보이는 효과를 짜고 싶다"; //i
        const btn2 = "모든 코드를 잡고 조종하는 쾌감이 좋다!<br>처음부터 에러까지 내가 모든 코드를 잡고 만져볼래"; //c
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="17" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Link to="./Question8_5">
                        <Button
                            onClick={() =>onIncrease() }
                        >
                            {btn1}
                        </Button></Link>
                        <br />
                        <Link to="./Question8_5">
                        <Button
                            onClick={() =>onDecrease()}
                        >
                           {btn2}
                        </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    };
export default Question8_4;
