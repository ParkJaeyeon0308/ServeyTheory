import React from "react";
import "../result.css";

class result1_1 extends React.Component {
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
                        <button
                            className="main_btn"
                            onClick={() => this.props.history.push("/")}
                        >
                            {mainBtn}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

// 기본 props 값
result1_1.defaultProps = {
    subject_name: "웹, 앱 뭐가 더 잘 맞을까?",
    main_context: "당신은 웹과 더 잘 맞는 성향이시군요?",
    sub_context:
        "웹이란? 월드 와이드 웹의 준말로 크롬과같은 브라우저에서 동작하는 홈페이지와 같은 서비스예요. 접근성이 낮고 상대적으로 저렴하게 개발할 수있어요.  </br> 웹을 더 많이 사용하고 간편한 것을 좋아하는 당신은 웹 개발을 할 때 더 흥미를 느낄 수 있을거예요!  </br> "
};

export default result1_1;
