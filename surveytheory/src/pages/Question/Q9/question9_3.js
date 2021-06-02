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
                    <progress id="progressbar" value="51" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                        dangerouslySetInnerHTML={{ __html: question_title }}
                    ></div>
                    <div className="buttons">
                        <Button
                            onClick={() =>
                                this.props.history.push("/question9_4")
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
                                this.props.history.push("/question9_4")
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
                                this.props.history.push("/question9_4")
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
                                this.props.history.push("/question9_4")
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
    question_title: "Q3. 당신은 회의할때 어떤 스타일 인가요?",
    btn1: '"무언가를 적지 않으면 불안해"',
    btn2: '"손으로 쓸 필요 없음! 잘 듣고 머리로 외우지 뭐"',
    btn3: '"옆 친구가 뭐하는지 본다. 나 혼자 썼다가 욕먹을 것 같아"',
    btn4: '"배고파서 아무 생각도 들지 않는다"'
};

export default question;
