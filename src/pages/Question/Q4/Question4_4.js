import React from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom";
import "./Question4_2";
import { str1 } from "./Question4_2";

function Question4_4() {
    const onIncrease = () => {
        str1.mbti1 += "U";
        console.log(str1);
    };
    const onDecrease = () => {
        str1.mbti1 += "D";
        console.log(str1);
    };
    const question_title = "Q4. 다음 중 더 기분이 안좋은 상황은?";
    const btn1 = "학교에 지각을 해서 선생님께 꾸중을 들었다"; //U
    const btn2 = (
        <>
            동아리 시간에 지각을 해서 <br />
            친하지 않은 친구에게 짜증을 들었다.
        </>
    ); //D
    return (
        <div className="Question">
            <div className="container">
                <progress id="progressbar" value="50" max="100"></progress>
                <div
                    className="question_title"
                    // html 형태로 렌더링 허용
                >
                    {question_title}
                </div>

                <div className="buttons">
                    <Link to="./Question4_5" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onIncrease()}>{btn1}</Button>
                    </Link>
                    <br />
                    <Link to="./Question4_5" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onDecrease()}>{btn2}</Button>
                    </Link>
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
export default Question4_4;
