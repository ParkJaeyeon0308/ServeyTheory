import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import "./Question1_1";
import { Link } from "react-router-dom"; 
import {number1, number2} from "./Question1_1";


function Question1_4(){
    //0으로 초기값 설정
    const onIncrease = () => {number1.count1++
        console.log(number1)};
        const onDecrease = () => {number2.count2++
            console.log(number2)};
        const question_title = "Q4. 붕어빵이 먹고싶어서 사러나가려고 한다.<br/> 당신이 선택한 가게는?";
        const btn1 ="집이랑 가까운 곳";
        const btn2 = "내가 좋아하는 슈크림 붕어빵이 있는 곳";
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="68" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Link to="./question1_5">
                        <Button
                            onClick={() =>onIncrease() }
                        >
                            {btn1}
                        </Button></Link>
                        <br />
                        <Link to="./question1_5">
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
export default Question1_4;