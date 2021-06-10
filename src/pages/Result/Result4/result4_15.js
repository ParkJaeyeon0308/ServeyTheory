import React from "react";
import "../result.css";

class result4_15 extends React.Component {
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
result4_15.defaultProps = {
    subject_name: "직장 mbti 테스트",
    main_context: "jwgd 유형",
    sub_context:
        "당신은 jwgd 유형입니다! </br> 스타트업보다 중소기업이 어울리고 연봉보다는 워라밸을 중시하는 편입니다. 또, 다른 직무보다 개발이 어울리시는군요.. 동기보다 선임 둘 중에 고르자면 동기가 좋은 회사를 선호할 것 같네요."
};

export default result4_15;
