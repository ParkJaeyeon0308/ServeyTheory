import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 
import "./Question9_1";
import { number1, number2, number3,number4 } from "./Question9_1";

function Question9_5(){
    const onPlus1 = () => {number1.count1++
        console.log(number1)};
    const onPlus2 = () => {number2.count2++
        console.log(number2)};
    const onPlus3 = () => {number3.count3++
        console.log(number3)};
    const onPlus4 = () => {number4.count4++
        console.log(number4)};
        const question_title = <>Q5. 개발 후 발표를 준비할 때 팀원들이<br/> 당신에게 부탁하는 것은?</>
        const btn1 ="코드 리뷰 또는 기획 설명의 부담감을 선사한다"; //리더
        const btn2 = "각자 개발한 파트를 맡아 발표를 준비해 달라고 부탁한다"; //부회장
        const btn3 = "생각보다 가벼운 부분을 부탁한다"; //평범
        const btn4 = "소감문을 잘 써두라고 한다"; //버스타기 장인
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="85" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Link to="./Question9_6">
                        <Button
                            onClick={() =>onPlus1() }
                        >
                            {btn1}
                        </Button></Link>
                        <br />
                        <Link to="./Question9_6">
                        <Button
                            onClick={() =>onPlus2()}
                        >
                           {btn2}
                        </Button>
                        </Link>
                        <br />
                        <Link to="./Question9_6">
                        <Button
                            onClick={() =>onPlus3()}
                        >
                           {btn3}
                        </Button>
                        </Link>
                        <br />
                        <Link to="./Question9_6">
                        <Button
                            onClick={() =>onPlus4()}
                        >
                           {btn4}
                        </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    };
export default Question9_5;
