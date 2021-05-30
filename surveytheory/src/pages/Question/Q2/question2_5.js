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
        "Q5. 나 내일이 과제 마감인데 놀고싶어... 나랑 놀쟈.. </br>라고 하는 친구에게 당신은?",
    btn1: "내일이 제출이다 이친구야!!! 빨리해!!!",
    btn2: "내일의 너에게 맡겨ㅎ.... 같이 논다"
};

export default question;
