import React from "react";
import "./question.css";
import Button from "../../component/Button";

class question extends React.Component {
    render() {
        const question_title = this.props.question_title;
        const btn1 = this.props.btn1;
        const btn2 = this.props.btn2;
        const btn3 = this.props.btn3;

        const progress = this.props.progress;

        return (
            <div className="Question">
                <p className="progress_text">{progress}% 진행 중</p>
                <p className="question_text">{question_title}</p>
                <div className="container">
                    <div>
                        <img id="image" src="../images/지브리.png" />
                    </div>
                </div>
                <div className="buttons">
                    <Button onClick={() => console.log("클릭 이벤트 처리")}>
                        {btn1}
                    </Button>
                    <br />

                    <Button onClick={() => console.log("클릭 이벤트 처리")}>
                        {btn2}
                    </Button>
                    <br />

                    <Button onClick={() => console.log("클릭 이벤트 처리")}>
                        {btn3}
                    </Button>
                </div>
            </div>
        );
    }
}

// 기본 props 값
question.defaultProps = {
    question_title:
        "Q1. 붕어빵이 먹고싶어서 사러나가려고 한다. 당신이 선택한 가게는?",
    btn1: "집이랑 가까운 곳",
    btn2: "내가 좋아하는 슈크림 붕어빵이 있는 곳",
    btn3: "귀찮아~ 집에 있을래",
    progress: 0
};

export default question;
