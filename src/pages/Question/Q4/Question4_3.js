import React from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom";

function Question4_3() {
    const question_title = "Q3. 당신은 어떤 버튼을 누르실래요?";
    const btn1 = "100%로 30만원 받기!";
    const btn2 = "50%로 100만원 받기!";
    return (
        <div className="Question">
            <div className="container">
                <progress id="progressbar" value="37.5" max="100"></progress>
                <div
                    className="question_title"
                    // html 형태로 렌더링 허용
                >
                    {question_title}
                </div>

                <div className="buttons">
                    <Link to="./Question4_4" style={{ textDecoration: "none" }}>
                        <Button>{btn1}</Button>
                    </Link>
                    <br />
                    <Link to="./Question4_4" style={{ textDecoration: "none" }}>
                        <Button>{btn2}</Button>
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
export default Question4_3;
