import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 
import "./Question4_1";
import { str1, str2 } from "./Question4_1";

function Question4_2(){
    const onIncrease = () => {str1.mbti1+="u"
    console.log(str1)};
    const onDecrease = () => {str2.mbti2+="d"
        console.log(str2)};
        const question_title = "Q2. 당신은 어떤 버튼을 누르실래요?";
        const btn1 ="100 퍼센트로 30만원 받기!"; //u
        const btn2 = "50 퍼센트로 100만원 받기!"; //d
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="17" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Link to="./Question4_3">
                        <Button
                            onClick={() =>onIncrease() }
                        >
                            {btn1}
                        </Button></Link>
                        <br />
                        <Link to="./Question4_3">
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
export default Question4_2;
