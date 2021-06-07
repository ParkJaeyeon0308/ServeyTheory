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
                    <progress id="progressbar" value="100" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                        dangerouslySetInnerHTML={{ __html: question_title }}
                    ></div>
                    <div className="buttons">
                        <Button onClick={() => this.props.history.push("/")}>
                            <div
                                className="btn1"
                                // html 형태로 렌더링 허용
                                dangerouslySetInnerHTML={{ __html: btn1 }}
                            ></div>
                        </Button>
                        <br />

                        <Button onClick={() => this.props.history.push("/")}>
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
    question_title: "Q6. 다음중 더 뿌듯한 상황은? </br> 친구에게 내가 만든~",
    btn1: "웹사이트 링크를 주고 자랑했다.", // web
    btn2: "앱스토어 링크를 주고 자랑했다." // app
};

export default question;
