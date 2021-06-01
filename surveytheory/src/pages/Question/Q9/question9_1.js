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
                    <progress id="progressbar" value="17" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                        dangerouslySetInnerHTML={{ __html: question_title }}
                    ></div>
                    <div className="buttons">
                        <Button onClick={() => 
                            this.props.history.push("/question9_2")
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
                                this.props.history.push("/question9_2")
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
                                this.props.history.push("/question9_2")
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
                                this.props.history.push("/question9_2")
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
        "Q1. 당신은 팀끼리 프로젝트를 시작할때 어떤 스타일 인가요?",
    btn1: '"난 별로 아이디어가 없는 것 같다"',
    btn2: '"실력이 없어도 잘할 수 있을거야!"',
    btn3: '"분명 망하진 않았는데 잘 돌아가지 <br>않는것 같은 느낌이 드는건 기분탓일까"',
    btn4: '"아 답답해 차라리 나혼자 할까"'
};

export default question;
