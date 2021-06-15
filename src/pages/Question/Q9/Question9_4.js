import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 
import "./Question9_1";
import { number1, number2, number3,number4 } from "./Question9_1";

function Question9_4(){
    const onPlus1 = () => {number3.count3++
        console.log(number3)};
    const onPlus2 = () => {number1.count1++
        console.log(number1)};
    const onPlus3 = () => {number2.count2++
        console.log(number2)};
    const onPlus4 = () => {number4.count4++
        console.log(number4)};
        const question_title = "Q4. 당신은 개발할 때 어떤 모습인가요?";
        const btn1 ='"항상 "빨리 보내줘" 라는 소리를 들었다"'; //평범
        const btn2 = '"내가 너무 빨라서 친구가 불안해 한다"'; //리더
        const btn3 = '"항상 무난했다"'; //부회장
        const btn4 = '"잠이온다... 잠이 온..ㄷ..잠이 온... zzZ..."'; //버스타기장인
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="17" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Link to="./Question9_5">
                        <Button
                            onClick={() =>onPlus1() }
                        >
                            {btn1}
                        </Button></Link>
                        <br />
                        <Link to="./Question9_5">
                        <Button
                            onClick={() =>onPlus2()}
                        >
                           {btn2}
                        </Button>
                        </Link>
                        <br />
                        <Link to="./Question9_5">
                        <Button
                            onClick={() =>onPlus3()}
                        >
                           {btn3}
                        </Button>
                        </Link>
                        <br />
                        <Link to="./Question9_5">
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
export default Question9_4;
