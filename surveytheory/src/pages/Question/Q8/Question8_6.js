import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 
import "./Question8_1";
import { number1, number2 } from "./Question8_1";

function Question8_6(){
    const onIncrease = () => {number1.count1++
    console.log(number1)};
    const onDecrease = () => {number2.count2++
        console.log(number2)};
        const question_title = "Q6. 어떨때 멋있어 보이고, 따라하고 싶은가요?";
        const btn1 ="현란한 효과와 무빙을 구현한 개발자의 프로젝트"; //i
        const btn2 = "보기만해도 머리 아픈 수학적 알고리즘을 <br>구현해 낸 개발자의 프로젝트"; //c
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="17" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Link to="/">
                        <Button
                            onClick={() =>onIncrease() }
                        >
                            {btn1}
                        </Button></Link>
                        <br />
                        <Link to="/">
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
export default Question8_6;
