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
        "Q3. 내가 더 자주 사용하는 것은?",
    btn1: "노트북이나 데스크탑",
    btn2: "휴대폰이나 아이패드"
};

export default question;
