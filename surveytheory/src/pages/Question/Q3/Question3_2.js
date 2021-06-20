import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 
import "./Question3_1";
import { number1} from "./Question3_1";

function Question3_2(){
    const onIncrease = () => {number1.count1+=10
    console.log(number1)};
    const onDecrease = () => {number1.count1+=30
        console.log(number1)};
        const question_title = "Q2. 당신이 체감하는 시간은?";
        const btn1 ="학교에만 있으면 시간이 너무 느리게 가..."; //10
        const btn2 = "눈 떠보니 벌써 여름..? 눈 떠보니 벌써 겨울....?"; //30
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="25" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Link to="./Question3_3">
                        <Button
                            onClick={() =>onIncrease() }
                        >
                            {btn1}
                        </Button></Link>
                        <br />
                        <Link to="./Question3_3">
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
export default Question3_2;
