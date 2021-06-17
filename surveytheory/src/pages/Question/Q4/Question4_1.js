import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 

function Question4_1(){
        const question_title = "Q1. 둘 중 당신의 선택은?";
        const btn1 ="나는 평생 개발로 일을 하고싶어!"; //a
        const btn2 = "솔직히 개발이 잘 맞는거 같진 않아ㅠ"; //g
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="17" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Link to="./Question4_2">
                        <Button
                        >
                            {btn1}
                        </Button></Link>
                        <br />
                        <Link to="./Question4_2">
                        <Button
                        >
                           {btn2}
                        </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    };
export default Question4_1;
