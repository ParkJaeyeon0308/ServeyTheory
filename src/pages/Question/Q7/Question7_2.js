import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 
import "./Question7_1";
import { number1, number2, number3,number4 } from "./Question7_1";


function Question7_2(){
    const onPlus1 = () => {number1.count1++
        console.log(number1)};
    const onPlus2 = () => {number2.count2++
        console.log(number2)};
    const onPlus3 = () => {number3.count3++
        console.log(number3)};
    const onPlus4 = () => {number4.count4++
        console.log(number4)};
        const question_title = "Q2. 기획할때 주로 어떤 타입인가요?";
        const btn1 ="여러 분야의 기획자들과 <br/> 전체적인 커뮤니케이션을 활발히 하는 스타일"; //F
        const btn2 = "적당히 회의를 했으면 정해진 기능을 <br/> 정확하게 파악하고 바로 개발 할 준비를 한다"; //B
        const btn3 = "항상 하는 프로젝트가 개발보다<br/> 개발 준비 단계가 더 오래걸렸다"; //FB
        const btn4 = "기획을 할때 개발하면서 기타 옵션으로 <br/> 다른 프로그램을 사용해 이것 저것 추가하도록 한다"; //BF
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="17" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Link to="./Question7_3">
                        <Button
                            onClick={() =>onPlus1() }
                        >
                            {btn1}
                        </Button></Link>
                        <br />
                        <Link to="./Question7_3">
                        <Button
                            onClick={() =>onPlus2()}
                        >
                           {btn2}
                        </Button>
                        </Link>
                        <br />
                        <Link to="./Question7_3">
                        <Button
                            onClick={() =>onPlus3()}
                        >
                           {btn3}
                        </Button>
                        </Link>
                        <br />
                        <Link to="./Question7_3">
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
export default Question7_2;
