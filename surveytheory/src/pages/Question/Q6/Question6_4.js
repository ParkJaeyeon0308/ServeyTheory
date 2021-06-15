import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 
import "./Question6_1";
import { number1, number2, number3 } from "./Question6_1";

function Question6_4(){
    const onPlus1 = () => {number1.count1++
        console.log(number1)};
    const onPlus2 = () => {number3.count3++
        console.log(number3)};
    const onPlus3 = () => {number2.count2++
        console.log(number2)};
        const question_title = "Q4. 그림(or 디자인 센스)을 잘 그리는 편인가요?";
        const btn1 ="잘 그리는 편이다"; //
        const btn2 = "그림? 배워보긴 했다"; //
        const btn3 = "점을 따라서 선을 그릴 수는 있다"; //
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="17" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Link to="./Question6_5">
                        <Button
                            onClick={() =>onPlus1() }
                        >
                            {btn1}
                        </Button></Link>
                        <br />
                        <Link to="./Question6_5">
                        <Button
                            onClick={() =>onPlus2()}
                        >
                           {btn2}
                        </Button>
                        </Link>
                        <br />
                        <Link to="./Question6_5">
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
export default Question6_4;


    // question_title: "Q4. 그림(or 디자인 센스)을 잘 그리는 편인가요?",
    // btn1: "잘 그리는 편이다", //D
    // btn2: "그림? 배워보긴 했다", //S
    // btn3: "점을 따라서 선을 그릴 수는 있다" //W
