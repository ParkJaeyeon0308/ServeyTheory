import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import "./Question8_1";
import { number1, number2 } from "./Question8_1";
import { useHistory } from 'react-router-dom';

function Question8_6(){
    const history = useHistory();
    const onIncrease = () => {
        number1.count1++;
        console.log(number1);
        if(number1.count1>number2.count2){
            history.push("./result8_1");
        }else{
            history.push("./result8_2");
        }
        number1.count1-=number1.count1;
        number2.count2-=number2.count2;
    };
    const onDecrease = () => {
        number2.count2++;
        console.log(number2);
        if(number1.count1>number2.count2){
            history.push("./result8_1");
        }else{
            history.push("./result8_2");
        }
        number1.count1-=number1.count1;
        number2.count2-=number2.count2;
    };
        const question_title = "Q6. 어떨때 멋있어 보이고, 따라하고 싶은가요?";
        const btn1 ="현란한 효과와 무빙을 구현한 개발자의 프로젝트"; //i
        const btn2 = "보기만해도 머리 아픈 수학적 알고리즘을 <br>구현해 낸 개발자의 프로젝트"; //c
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="17" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Button
                            onClick={() =>onIncrease() }
                        >
                            {btn1}
                        </Button>
                        <br />
                        <Button
                            onClick={() =>onDecrease()}
                        >
                           {btn2}
                        </Button>
                    </div>
                </div>
            </div>
        );
    };
export default Question8_6;
