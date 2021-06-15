import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 
import "./Question7_1";
import { number1, number2, number3,number4 } from "./Question7_1";

function Question7_6(){
    const onPlus1 = () => {number1.count1++
        console.log(number1)};
    const onPlus2 = () => {number2.count2++
        console.log(number2)};
    const onPlus3 = () => {number2.count3++
        console.log(number3)};
    const onPlus4 = () => {number2.count4++
        console.log(number4)};
        const question_title = "Q6. 유지보수할때 나는?";
        const btn1 ="기능적 발전에 주목한다"; //B
        const btn2 = "어떻게 하면 더 한 눈에 볼 수 있을지 생각한다"; //F
        const btn3 = "객관적인 관점들이 매우 중요하다고 생각한다"; //FB
        const btn4 = "유지보수란 항상 가다듬는 것이라고 생각한다"; //BF
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
                            onClick={() =>onPlus1() }
                        >
                            {btn1}
                        </Button></Link>
                        <br />
                        <Link to="/">
                        <Button
                            onClick={() =>onPlus2()}
                        >
                           {btn2}
                        </Button>
                        </Link>
                        <br />
                        <Link to="/">
                        <Button
                            onClick={() =>onPlus3()}
                        >
                           {btn3}
                        </Button>
                        </Link>
                        <br />
                        <Link to="/">
                        <Button
                            onClick={() =>onPlus4()}
                        >
                           {btn4}
                        </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    };
export default Question7_6;
