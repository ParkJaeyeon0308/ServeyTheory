import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 
import "./Question3_1";
import { number1} from "./Question3_1";

function Question3_5(){
    const onIncrease = () => {number1.count1+=10
    console.log(number1)};
    const onDecrease = () => {number1.count1+=30
        console.log(number1)};
        const question_title = "Q5. 지나가는 다른 학교 학생들을 보며...?";
        const btn1 ="나도 교복 편하게 입고싶다... ㅠㅠㅠ"; //10
        const btn2 = "히익 치마가 왜이렇게 짧지????"; //30
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="62.5" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Link to="./Question3_6">
                        <Button
                            onClick={() =>onIncrease() }
                        >
                            {btn1}
                        </Button></Link>
                        <br />
                        <Link to="./Question3_6">
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
export default Question3_5;
