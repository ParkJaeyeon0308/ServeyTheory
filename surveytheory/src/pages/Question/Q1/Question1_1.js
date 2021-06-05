import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 

const number = 0;

function Question1_1(){
        const [number, setNumber] = useState(0);

        const onIncrease = () => {
            setNumber(number + 1);
            console.log(number + 1);
        }

        const onDecrease = () => {
            setNumber(number - 1);
            console.log(number - 1);
        }
        const question_title = "Q1. 나의 휴대폰은?";
        const btn1 ="예쁜 디자인의 아이폰";
        const btn2 = "실용성이 최고지! 그 외의 폰";
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="17" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Link to="./question1_2">
                        <Button
                            onClick={() =>onIncrease() }
                        >
                            {btn1}
                        </Button></Link>
                        <br />
                        <Link to="./question1_2">
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
export default Question1_1;//
