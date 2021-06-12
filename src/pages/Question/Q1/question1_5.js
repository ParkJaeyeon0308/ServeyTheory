import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import "./Question1_1";
import { Link } from "react-router-dom";
import { number1, number2 } from "./Question1_1";

function Question1_5() {
    //0으로 초기값 설정
    const onIncrease = () => {
        number1.count1++;
        console.log(number1);
    };
    const onDecrease = () => {
        number2.count2++;
        console.log(number2);
    };
    const question_title = "Q5. 당신의 선택은?";
    const btn1 = '"나는 인터넷 없으면 저얼대 하루도 못 버텨!"';
    const btn2 = '"난 하루정도는 잠자고 딩가딩가하면서 가능할듯 ㅎㅎ"';
    return (
        <div className="Question">
            <div className="container">
                <progress id="progressbar" value="84" max="100"></progress>
                <div
                    className="question_title"
                    // html 형태로 렌더링 허용
                >
                    {question_title}
                </div>

                <div className="buttons">
                    <Link to="./Question1_6">
                        <Button onClick={() => onIncrease()}>{btn1}</Button>
                    </Link>
                    <br />
                    <Link to="./Question1_6">
                        <Button onClick={() => onDecrease()}>{btn2}</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Question1_5;
