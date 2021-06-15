import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 

export let number1 = {count1:0};
function Question3_1(){
    const onIncrease = () => {number1.count1+=30
    console.log(number1);};
    const onDecrease = () => {number1.count1+=10
        console.log(number1);};
        const question_title = "Q1. 당신이 둘 중에 더 선호하는 것은?";
        const btn1 ="친구들과 여러명이서 하는 팀 프로젝트가 좋아!"; //30
        const btn2 = "나 혼자 효율적으로 하는 개인 프로젝트가 좋아!"; //10
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="17" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Link to="./Question3_2">
                        <Button
                            onClick={() =>onIncrease() }
                        >
                            {btn1}
                        </Button></Link>
                        <br />
                        <Link to="./Question3_2">
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
export default Question3_1;
