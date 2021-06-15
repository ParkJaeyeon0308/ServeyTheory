/* eslint-disable no-restricted-globals */
import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import "./Question1_1";
import { useHistory } from 'react-router-dom';
import { number1, number2 } from "./Question1_1";

function Question1_6() {
    //0으로 초기값 설정
    const history = useHistory();
    const onIncrease = () => {
        number1.count1++;
        console.log(number1.count1);
        if(number1.count1>number2.count2){
            history.push('./result1_1');
        }else{
            history.push('./result1_2');
        }
        number1.count1-=number1.count1;
        number2.count2-=number2.count2;
    };
    const onDecrease = () => {
        number2.count2++;
        console.log(number2);
        if(number1.count1>number2.count2){
            history.push('./result1_1');
        }else{
            history.push('./result1_2');
        }
        number1.count1-=number1.count1;
        number2.count2-=number2.count2;
    };
    const question_title =
        "Q6. 다음중 더 뿌듯한 상황은? </br> 친구에게 내가 만든~";
    const btn1 = "웹사이트 링크를 주고 자랑했다";
    const btn2 = "앱스토어 링크를 주고 자랑했다";
    return (
        <div className="Question">
            <div className="container">
                <progress id="progressbar" value="100" max="100"></progress>
                <div
                    className="question_title"
                    // html 형태로 렌더링 허용
                >
                    {question_title}
                </div>

                <div className="buttons">
                    {/* <Link to="/"> */}
                        <Button onClick={() => onIncrease()}>{btn1}</Button>
                    {/* </Link> */}
                    <br />
                    {/* <Link to="/"> */}
                        <Button onClick={() => onDecrease()}>{btn2}</Button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    );
}
export default Question1_6;
