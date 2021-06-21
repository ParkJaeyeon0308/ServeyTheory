import React from "react";
import "../result.css";

class result4_2 extends React.Component {
    render() {
        const subject_name = this.props.subject_name;
        const imgUrl = "/images/result/type4/sygd.png";
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
result4_2.defaultProps = {
    subject_name: "직장 mbti 테스트",
    sub_context:
        "당신은 <span>sygd 유형</span> 입니다! <br/> 이 타입은 중소기업 보단 <span>스타트업</span>을 선호하고, 워라밸보다 <span>연봉을 중시</span>하는 편입니다. 또, 다른 직무보다 개발을 좋아해 <span>개발 직무</span>를 선호하시는군요. 그리고, 동기보다 선임 둘 중에 고르자면 <span>동기</span>가 좋은 회사를 선호하는 특징이 있습니다. :-)"
};

export default result4_2;
