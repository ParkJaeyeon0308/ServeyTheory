import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom";
import "./Question6_1";
import { number1, number2, number3 } from "./Question6_1";

function Question6_3() {
    const onPlus1 = () => {
        number3.count3++;
        console.log(number3);
    };
    const onPlus2 = () => {
        number2.count2++;
        console.log(number2);
    };
    const onPlus3 = () => {
        number1.count1++;
        console.log(number1);
    };
    const question_title = "Q3. 어떤걸 해보고 싶나요?";
    const btn1 = "간단하지만 중요한 역할은 부담스럽다"; //
    const btn2 = "배우고 외워서 하는게 제일 편하고 좋지"; //
    const btn3 = "배우는대로 만들어보는 것도 나쁘지 않은것 같다"; //
    return (
        <div className="Question">
            <div className="container">
                <progress id="progressbar" value="51" max="100"></progress>
                <div
                    className="question_title"
                    // html 형태로 렌더링 허용
                >
                    {question_title}
                </div>

                <div className="buttons">
                    <Link to="./Question6_4" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onPlus1()}>{btn1}</Button>
                    </Link>
                    <br />
                    <Link to="./Question6_4" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onPlus2()}>{btn2}</Button>
                    </Link>
                    <br />
                    <Link to="./Question6_4" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onPlus3()}>{btn3}</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Question6_3;

// question_title: "Q3. 어떤걸 해보고 싶나요?",
// btn1: "간단하지만 중요한 역할은 부담스럽다", //W
// btn2: "배우고 외워서 하는게 제일 편하고 좋지", //S
// btn3: "배우는대로 만들어보는 것도 나쁘지 않은것 같다" //D
