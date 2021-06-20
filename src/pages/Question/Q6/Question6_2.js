import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 
import "./Question6_1";
import { number1, number2, number3 } from "./Question6_1";

function Question6_2(){
    const onPlus1 = () => {number1.count1++
        console.log(number1)};
    const onPlus2 = () => {number2.count2++
        console.log(number2)};
    const onPlus3 = () => {number3.count3++
        console.log(number3)};
        const question_title = "Q2. 오늘 배운 수업을 어떻게 습득하나요?";
        const btn1 ="꼼꼼하게 기능 하나하나 습득해서 응용해 사용해보는 편"; //
        const btn2 = "꼼꼼함엔 자신이 없지만 빠르게 받아들일 수 있다"; //
        const btn3 = "배우는대로 뭐든 만들어봐"; //
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="34" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Link to="./Question6_3">
                        <Button
                            onClick={() =>onPlus1() }
                        >
                            {btn1}
                        </Button></Link>
                        <br />
                        <Link to="./Question6_3">
                        <Button
                            onClick={() =>onPlus2()}
                        >
                           {btn2}
                        </Button>
                        </Link>
                        <br />
                        <Link to="./Question6_3">
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
export default Question6_2;

//         "Q2. 오늘 배운 수업을 어떻게 습득하나요?", 
//     btn1: "꼼꼼하게 기능 하나하나 습득해서 응용해 사용해보는 편", //D
//     btn2: "꼼꼼함엔 자신이 없지만 빠르게 받아들일 수 있다", //W
//     btn3: "배우는대로 뭐든 만들어봐" //S
