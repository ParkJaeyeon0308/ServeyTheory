import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 

export let number1 = {count1:0};
export let number2 = {count2:0};
function Question8_1(){
    const onIncrease = () => {number2.count2++
    console.log(number2)};
    const onDecrease = () => {number1.count1++
        console.log(number1)};
        const question_title = "Q1. 어떤 것이 편리한가요?";
        const btn1 ="이런 기능, 저런 기능 가져와서 import하는게 편리해"; //c
        const btn2 = "한 번에 빨리 간단하게 쳐보자"; //i
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="17" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Link to="./Question8_2">
                        <Button
                            onClick={() =>onIncrease() }
                        >
                            {btn1}
                        </Button></Link>
                        <br />
                        <Link to="./Question8_2">
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
export default Question8_1;
