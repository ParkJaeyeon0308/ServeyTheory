import React, { useState } from "react";
import "../question.css";
import Button from "../../../component/Button";

class question extends React.Component {
    render() {
        const question_title = this.props.question_title;
        const btn1 = this.props.btn1;
        const btn2 = this.props.btn2;

        const [number, setNumber] = useState(1);

        const increaseNumber = () => { // number의 값을 증가시키는 함수
            setNumber(number + 1);
            // setNumber(prevNumber => prevNumber + 1);
            // 다음과 같이 현재 number의 값을 불러와서 증가 시켜주는 방법도 있습니다 :)
          };
        
          const decreaseNumber = () => { // number의 값을 감소시키는 함수
            setNumber(number - 1);
            // setNumber(prevNumber => prevNumber - 1);
            // 다음과 같이 현재 number의 값을 불러와서 감소 시켜주는 방법도 있습니다 :)
          }

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
                        <Button
                            onClick={() =>
                                this.props.history.push(decreaseNumber()),
                                this.props.history.push("/question1_2"),
                                console.log()
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
                                this.props.history.push(increaseNumber()),
                                this.props.history.push("/question1_2"),
                                console.log()
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
    question_title: "Q1. 나의 휴대폰은?",
    btn1: "예쁜 디자인의 아이폰",
    btn2: "실용성이 최고지! 그 외의 폰"
};

export default question;
