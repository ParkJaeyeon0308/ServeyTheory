import React from "react";
import "./question.css";
import Button from "../../component/Button";

function question() {
    const text = {
        question: "질문질문질문질문질문질문질문질문",
        btn1: "BUTTON",
        btn2: "BUTTON",
        btn3: "BUTTON",
        progress: 0
    };

    return (
        <div className="Question">
            <p className="progress_text">{text.progress}% 진행 중</p>
            <p className="question_text">Q. {text.question}</p>
            <div className="container">
                <div>
                    <img id="image" src="../images/지브리.png" />
                </div>
            </div>
            <div className="buttons">
                <Button onClick={() => console.log("클릭 이벤트 처리")}>
                    {text.btn1}
                </Button>
                <br />

                <Button onClick={() => console.log("클릭 이벤트 처리")}>
                    {text.btn2}
                </Button>
                <br />

                <Button onClick={() => console.log("클릭 이벤트 처리")}>
                    {text.btn2}
                </Button>
            </div>
        </div>
    );
}

export default question;
