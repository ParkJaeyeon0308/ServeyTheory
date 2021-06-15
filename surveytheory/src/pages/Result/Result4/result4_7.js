import React from "react";
import "../result.css";

class result4_7 extends React.Component {
    render() {
        const subject_name = this.props.subject_name;
        const imgUrl = "/images/result/type4/swgu.png";
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
result4_7.defaultProps = {
    subject_name: "직장 mbti 테스트",
    sub_context:
        "당신은 swgu 유형입니다! <br/> 스타트업과 어울리고 연봉보다 워라밸을 중시하는 편입니다. 또, 다른 직무보다 개발이 어울리시는군요. 동기보다 선임 둘 중에 고르자면 선임이 좋은 회사를 선호할 것 같네요."
};

export default result4_7;
