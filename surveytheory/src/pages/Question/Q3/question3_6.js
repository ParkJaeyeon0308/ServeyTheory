import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 
import "./Question3_1";
import { number1} from "./Question3_1";

function Question3_6(){
    const onIncrease = () => {number1.count1+=30
    console.log(number1)};
    const onDecrease = () => {number1.count1+=10
        console.log(number1)};
        const question_title = "Q6. 당신이 생각하는 더 나은 밸런스는?";
        const btn1 ="일반과목 평균 50점, 전공과목 평균 90점 받기"; //30
        const btn2 = "일반과목과 전공과목 전체 평균 80점 받기"; //10
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="17" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Link to="./Question3_7">
                        <Button
                            onClick={() =>onIncrease() }
                        >
                            {btn1}
                        </Button></Link>
                        <br />
                        <Link to="./Question3_7">
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
export default Question3_6;