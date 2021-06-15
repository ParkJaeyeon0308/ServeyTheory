import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 
import "./Question6_1";
import { number1, number2, number3 } from "./Question6_1";

function Question6_5(){
    const onPlus1 = () => {number1.count1++
        console.log(number1)};
    const onPlus2 = () => {number2.count2++
        console.log(number2)};
    const onPlus3 = () => {number3.count3++
        console.log(number3)};
        const question_title = "Q5. 체크남방 어떻게 생각하시나요?";
        const btn1 ="괜찮다, 상관없다"; //
        const btn2 = "어떤 체크? 파란색? 무슨 톤? 빨간색?"; //
        const btn3 = "체크 제발 ;; plz..."; //
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="17" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Link to="./Question6_6">
                        <Button
                            onClick={() =>onPlus1() }
                        >
                            {btn1}
                        </Button></Link>
                        <br />
                        <Link to="./Question6_6">
                        <Button
                            onClick={() =>onPlus2()}
                        >
                           {btn2}
                        </Button>
                        </Link>
                        <br />
                        <Link to="./Question6_6">
                        <Button
                            onClick={() =>onPlus3()}
                        >
                           {btn3}
                        </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    };
export default Question6_5;

    // question_title: "Q5. 체크남방 어떻게 생각하시나요?",
    // btn1: "괜찮다, 상관없다", //W
    // btn2: "어떤 체크? 파란색? 무슨 톤? 빨간색?", //D
    // btn3: "체크 제발 ;; plz..." //S
