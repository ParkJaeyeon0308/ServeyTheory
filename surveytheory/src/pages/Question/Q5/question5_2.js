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
        "Q2. 마트가서 우유사고 만약 아보카도 있으면 6개 사와 ~<br/> 아보카도가 있었을 때 당신은?",
    btn1: "우유와 아보카도 6개를 산다",
    btn2: "우유를 6개 산다"
};

export default question;
