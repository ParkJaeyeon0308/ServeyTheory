import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 
import "./Question7_1";
import { number1, number2, number3,number4 } from "./Question7_1";

function Question7_5(){
    const onPlus1 = () => {number2.count2++
        console.log(number2)};
    const onPlus2 = () => {number3.count3++
        console.log(number3)};
    const onPlus3 = () => {number4.count4++
        console.log(number4)};
    const onPlus4 = () => {number1.count1++
        console.log(number1)};
        const question_title = "Q5. 전공수업을 배우면서 느끼는 감정은?";
        const btn1 ="이것 저것에 다 접목시켜 사용되는게 좋다"; //F
        const btn2 = "모든 언어들의 응용점이 있었음 좋겠다"; //FB
        const btn3 = "접근성이 좋은 서비스를 좋아한다"; //BF
        const btn4 = "다 같은 코드이지만 창조성이 있으면 매력을 느낀다"; //B
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="17" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Link to="./Question7_6">
                        <Button
                            onClick={() =>onPlus1() }
                        >
                            {btn1}
                        </Button></Link>
                        <br />
                        <Link to="./Question7_6">
                        <Button
                            onClick={() =>onPlus2()}
                        >
                           {btn2}
                        </Button>
                        </Link>
                        <br />
                        <Link to="./Question7_6">
                        <Button
                            onClick={() =>onPlus3()}
                        >
                           {btn3}
                        </Button>
                        </Link>
                        <br />
                        <Link to="./Question7_6">
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
export default Question7_5;
