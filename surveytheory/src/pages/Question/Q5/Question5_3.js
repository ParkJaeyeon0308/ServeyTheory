import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 
import "./Question5_1";
import { number1, number2 } from "./Question5_1";

function Question5_3(){
    const onIncrease = () => {number1.count1+=30
    console.log(number1)};
    const onDecrease = () => {number2.count2+=10
        console.log(number2)};
        const question_title = "Q3. 내가 짠 코드에 문제가 있을 때 당신은?";
        const btn1 ="컴퓨터에게 대화를 건다. '넌 대체 왜 안되는거니?"; //30
        const btn2 = "침착하게 코드를 살핀다."; //10
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="17" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Link to="./Question5_4">
                        <Button
                            onClick={() =>onIncrease() }
                        >
                            {btn1}
                        </Button></Link>
                        <br />
                        <Link to="./Question5_4">
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
export default Question5_3;
