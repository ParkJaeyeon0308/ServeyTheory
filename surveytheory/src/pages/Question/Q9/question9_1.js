import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 

export let number1 = {count1:0};
export let number2 = {count2:0};
export let number3 = {count3:0};
export let number4 = {count4:0};
function Question9_1(){
    const onPlus1 = () => {number1.count1++
        console.log(number1)};
    const onPlus2 = () => {number2.count2++
        console.log(number2)};
    const onPlus3 = () => {number3.count3++
        console.log(number3)};
    const onPlus4 = () => {number4.count4++
        console.log(number4)};
        const question_title = "Q1. 당신은 팀끼리 프로젝트를 시작할때<br/> 어떤 스타일 인가요?";
        const btn1 ='"난 별로 아이디어가 없는 것 같다"'; //버스타기 장인
        const btn2 = '"실력이 없어도 잘 할 수 있을거야!"'; ////평범
        const btn3 = '"분명 망하진 않았는데 잘 돌아가지 않는 것<br/> 같은 느낌이 드는건 기분탓일까"'; //부회장
        const btn4 = '"아 답답해 차라리 나 혼자 할까"'; //리더
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="17" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Link to="./Question9_2">
                        <Button
                            onClick={() =>onPlus1() }
                        >
                            {btn1}
                        </Button></Link>
                        <br />
                        <Link to="./Question9_2">
                        <Button
                            onClick={() =>onPlus2()}
                        >
                           {btn2}
                        </Button>
                        </Link>
                        <br />
                        <Link to="./Question9_2">
                        <Button
                            onClick={() =>onPlus3()}
                        >
                           {btn3}
                        </Button>
                        </Link>
                        <br />
                        <Link to="./Question9_2">
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
export default Question9_1;