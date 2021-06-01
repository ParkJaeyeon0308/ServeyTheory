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
                            this.props.history.push("/question9_5")
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
                                this.props.history.push("/question9_5")
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
                                this.props.history.push("/question9_5")
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
                                this.props.history.push("/question9_5")
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
        "Q4. 당신은 개발할때 어떤 모습인가요?",
    btn1: '"항상 "빨리 보내줘"라는 소리를 들었다"',
    btn2: '"내가 너무 빨라서 친구가 불안해 한다"',
    btn3: '"항상 무난했다"',
    btn4: '"잠이온다...잠이 온..ㄷ..잠이온...ㅈ...ㅈ...."'
};

export default question;
