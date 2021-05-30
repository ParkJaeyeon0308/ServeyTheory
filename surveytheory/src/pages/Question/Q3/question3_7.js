import React from "react";
import "./question.css";
import Button from "../../../component/Button";

class question extends React.Component {
    render() {
        const question_title = this.props.question_title;
        const btn1 = this.props.btn1;
        const btn2 = this.props.btn2;

        return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="10" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                        dangerouslySetInnerHTML={{ __html: question_title }}
                    ></div>
                    <div className="buttons">
                        <Button onClick={() => console.log("클릭 이벤트 처리")}>
                            {btn1}
                        </Button>
                        <br />

                        <Button onClick={() => console.log("클릭 이벤트 처리")}>
                            {btn2}
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

// 기본 props 값
question.defaultProps = {
    question_title:
        "Q7. 당신이 직장에 가지고 있는 생각은?",
    btn1: "스타트업에 나온 남주혁처럼 잘생긴 사수가 기대된다",
    btn2: "친근한 체크남방 동료가 상상된다"
};

export default question;
