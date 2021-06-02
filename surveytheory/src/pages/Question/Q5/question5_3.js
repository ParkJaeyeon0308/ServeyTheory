import React from "react";
import "../question.css";
import Button from "../../../component/Button";

class question extends React.Component {
    render() {
        const question_title = this.props.question_title;
        const btn1 = this.props.btn1;
        const btn2 = this.props.btn2;

        return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="33" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                        dangerouslySetInnerHTML={{ __html: question_title }}
                    ></div>
                    <div className="buttons">
                        <Button
                            onClick={() =>
                                this.props.history.push("/question5_4")
                            }
                        >
                            <div
                                className="btn1"
                                // html 형태로 렌더링 허용
                                dangerouslySetInnerHTML={{ __html: btn1 }}
                            ></div>
                        </Button>
                        <br />

                        <Button
                            onClick={() =>
                                this.props.history.push("/question5_4")
                            }
                        >
                            <div
                                className="btn2"
                                // html 형태로 렌더링 허용
                                dangerouslySetInnerHTML={{ __html: btn2 }}
                            ></div>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

// 기본 props 값
question.defaultProps = {
    question_title: "Q3. 내가 짠 코드에 문제가 있을 때 당신은?",
    btn1: "컴퓨터에게 대화를 건다. '넌 대체 왜 안되는거니?'",
    btn2: "침착하게 코드를 살핀다."
};

export default question;
