import React from "react";
import "../result.css";

class result8_1 extends React.Component {
    render() {
        const subject_name = this.props.subject_name;
        const imgUrl = "/images/" + subject_name + ".png";
        const main_context = this.props.main_context;
        const sub_context = this.props.sub_context;

        const saveBtn = "결과저장";
        const mainBtn = "메인으로";
        return (
            <div className="result">
                <div className="container">
                    <div
                        className="subject_name"
                        // html 형태로 렌더링 허용
                        dangerouslySetInnerHTML={{ __html: subject_name }}
                    ></div>
                    <img className="type-img" src={imgUrl} alt={subject_name} />
                    <div
                        className="main_context"
                        // html 형태로 렌더링 허용
                        dangerouslySetInnerHTML={{ __html: main_context }}
                    ></div>
                    <div
                        className="sub_context"
                        // html 형태로 렌더링 허용
                        dangerouslySetInnerHTML={{ __html: sub_context }}
                    ></div>

                    <div className="buttons">
                        <button
                            className="save_btn"
                            onClick={() => this.props.history.push("/collect")}
                        >
                            {saveBtn}
                        </button>
                        <a href="#">
                            <button
                                className="main_btn"
                                onClick={() => this.props.history.push("/")}
                            >
                                {mainBtn}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

// 기본 props 값
result8_1.defaultProps = {
    subject_name: "내가 잘할 것 같은 프로그래밍 언어는?",
    main_context: "인터프리터 언어",
    sub_context:
        "당신은 간단하면서도 확실한 언어를 선호하시는군요! 이쪽에 재능이 있으신거 같은데요? <br/> 이 분야는 프론트엔드의 경험을 쌓는데도 도움을 줄 수 있습니다.  <br/> Python, JavaScript를 대표로 인터프리터 언어를 배워보시면 좋을거 같네요.  </br> "
};

export default result8_1;
