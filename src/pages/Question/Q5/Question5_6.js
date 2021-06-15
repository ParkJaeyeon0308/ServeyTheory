import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 
import "./Question5_1";
import { number1} from "./Question5_1";

function Question5_6(){
    const onIncrease = () => {number1.count1+=10
    console.log(number1)};
    const onDecrease = () => {number1.count1+=30
        console.log(number1)};
        const question_title = "Q6. 다음중 더 불안한 것은?";
        const btn1 ="에러가 날 때"; //10
        const btn2 = "에러가 안날 때"; //30
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="17" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Link to="./Question5_7">
                        <Button
                            onClick={() =>onIncrease() }
                        >
                            {btn1}
                        </Button></Link>
                        <br />
                        <Link to="./Question5_7">
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
export default Question5_6;
