import React from "react";
import "../question.css";
import Button from "../../../component/Button";

class question extends React.Component {
    render() {
        const question_title = this.props.question_title;
        const btn1 = this.props.btn1;
        const btn2 = this.props.btn2;
        const btn3 = this.props.btn3;
        const btn4 = this.props.btn4;

        return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="68" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                        dangerouslySetInnerHTML={{ __html: question_title }}
                    ></div>
                    <div className="buttons">
                        <Button onClick={() => 
                            this.props.history.push("/question7_5")
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
                                this.props.history.push("/question7_5")
                            }
                        >
                            <div
                                className="btn2"
                                // html 형태로 렌더링 허용
                                dangerouslySetInnerHTML={{ __html: btn2 }}
                            ></div>
                        </Button>
                        <br />
                        <Button
                            onClick={() =>
                                this.props.history.push("/question7_5")
                            }
                        >
                            <div
                                className="btn3"
                                // html 형태로 렌더링 허용
                                dangerouslySetInnerHTML={{ __html: btn3 }}
                            ></div>
                        </Button>
                        <br />
                        <Button
                            onClick={() =>
                                this.props.history.push("/question7_5")
                            }
                        >
                            <div
                                className="btn4"
                                // html 형태로 렌더링 허용
                                dangerouslySetInnerHTML={{ __html: btn4 }}
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
    question_title:
        "Q4. 프로젝트 기획을 하면서 중요하게 생각하는 부분은?",
    btn1: "사용자의 접촉점을 먼저 생각한다",
    btn2: "문화와 관련된 것들이 가장 실용도가 높다",
    btn3: "화면의 구성이 편하지 않으면 기능의 효과를 <br> 제대로 전달할 수 없다고 생각한다",
    btn4: "항상 생활을 하며 불편했던 부분들을 먼저 꺼내본다"
};

export default question;
