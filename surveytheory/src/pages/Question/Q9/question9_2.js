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
                    <progress id="progressbar" value="34" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                        dangerouslySetInnerHTML={{ __html: question_title }}
                    ></div>
                    <div className="buttons">
                        <Button
                            onClick={() =>
                                this.props.history.push("/question9_3")
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
                                this.props.history.push("/question9_3")
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
                                this.props.history.push("/question9_3")
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
                                this.props.history.push("/question9_3")
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
        "Q2. 밤새고 다음날 또 새벽 3시<br/> 당신은 어떤 모습인가요?",
    btn1: '"너무 졸려서 죽을 것 같아 죽기 싫어!"',
    btn2: '"죽을거 같긴 한데 오늘 못 하면 내일 죽는다"',
    btn3: '"하나님은 버티지 못 할 시련을 주시지 않는다"',
    btn4: '"zzZ..."'
};

export default question;
