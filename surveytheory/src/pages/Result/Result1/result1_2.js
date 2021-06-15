import React from "react";
import "../result.css";

class result1_2 extends React.Component {
    render() {
        const subject_name = this.props.subject_name;
        const imgUrl = "/images/" + subject_name + ".png";
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
                        <a href="/#">
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
result1_2.defaultProps = {
    subject_name: "웹, 앱 뭐가 더 잘 맞을까?",
    sub_context:
        "앱이란? 애플리케이션의 준말로 설치하여 사용하는 프로그램이에요. 대표적으로 카카오톡과 같은 어플이 있고, 실행속도가 빠르며 접근성이 높은 편이에요.  </br> 앱을 더 많이 사용하고 휴대폰을 사랑하는 당신은 앱 개발을 할 때 더 흥미를 느낄 수 있을거예요!"
};

export default result1_2;
