import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import "./Question5_1";
import { number1 } from "./Question5_1";
import { useHistory } from "react-router-dom";

function Question5_9() {
    const history = useHistory();
    const onIncrease = () => {
        number1.count1 += 10;
        console.log(number1);
        if (number1.count1 >= 90 && number1.count1 <= 150) {
            history.push("./result5_1");
        } else if (number1.count1 >= 151 && number1.count1 <= 210) {
            history.push("./result5_2");
        } else {
            history.push("./result5_3");
        }
        number1.count1 -= number1.count1;
    };
    const onDecrease = () => {
        number1.count1 += 30;
        console.log(number1);
        if (number1.count1 >= 90 && number1.count1 <= 150) {
            history.push("./result5_1");
        } else if (number1.count1 >= 151 && number1.count1 <= 210) {
            history.push("./result5_2");
        } else {
            history.push("./result5_3");
        }
        number1.count1 -= number1.count1;
    };
    const question_title =
        "Q9. !테스트를 해주셔서 정말 감사하지 않습니다 ㅎㅎ?";
    const btn1 = "뭐야? 왜 저래?"; //10
    const btn2 = "당근이죠 ㅎㅎ"; //30
    // 90 - 150 : 151 - 210 : 211 - 270
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
                    <Button onClick={() => onIncrease()}>{btn1}</Button>
                    <br />
                    <Button onClick={() => onDecrease()}>{btn2}</Button>
                </div>
                <img
                    className="mini-logo-question"
                    src="/images/logo/mini-logo.png"
                    alt="mini-logo"
                />
            </div>
        </div>
    );
}
export default Question5_9;
