import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 
import "./Question5_1";
import { number1} from "./Question5_1";

function Question5_2(){
    const onIncrease = () => {number1.count1+=10
    console.log(number1)};
    const onDecrease = () => {number1.count1+=30
        console.log(number1)};
        const question_title = "Q2. 마트가서 우유사고 만약 아보카도 있으면 6개 사와 ~<br/> 아보카도가 있었을 때 당신은?";
        const btn1 ="우유와 아보카도 6개를 산다"; //10
        const btn2 = "우유를 6개 산다"; //30
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="17" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Link to="./Question5_3">
                        <Button
                            onClick={() =>onIncrease() }
                        >
                            {btn1}
                        </Button></Link>
                        <br />
                        <Link to="./Question5_3">
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
export default Question5_2;
