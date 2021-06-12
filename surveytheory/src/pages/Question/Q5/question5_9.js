import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 
import "./Question5_1";
import { number1, number2 } from "./Question5_1";

function Question5_9(){
    const onIncrease = () => {number1.count1+=10
    console.log(number1)};
    const onDecrease = () => {number2.count2+=30
        console.log(number2)};
        const question_title = "Q9. !테스트를 해주셔서 정말 감사하지 않습니다 ㅎㅎ?";
        const btn1 ="뭐야? 왜 저래?"; //10
        const btn2 = "당근이죠 ㅎㅎ"; //30
        // 90 - 150 : 151 - 210 : 211 - 270
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
export default Question5_9;