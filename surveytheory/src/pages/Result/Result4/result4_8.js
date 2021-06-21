import React from "react";
import "../result.css";

import $ from "jquery";
window.$ = $;

class result4_8 extends React.Component {
    render() {
        $(document).ready(function () {
            setTimeout(function () {
                $(".loader").delay(3000).fadeOut(1500);
            });
        });

        const subject_name = this.props.subject_name;
        const imgUrl = "/images/result/type4/swau.png";
        const sub_context = this.props.sub_context;

        const saveBtn = "결과저장";
        const mainBtn = "메인으로";
        return (
            <div className="result">
                {" "}
                <div class="loader">
                    <div id="container">
                        <img
                            className="loading-logo"
                            src="/images/logo/mini-logo.png"
                            alt="mini-logo"
                        />
                        <div id="one"></div>
                        <div id="two"></div>
                        <div id="three"></div>
                        <span id="loading-text">LOADING</span>
                    </div>
                </div>
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
result4_8.defaultProps = {
    subject_name: "직장 mbti 테스트",
    sub_context:
        "당신은 <span>swau 유형</span> 입니다! <br/> 이 타입은 중소기업 보단 <span>스타트업</span>을 선호하고, 연봉보다 <span>워라밸을 중시</span>하는 편입니다. 또, 개발을 제외한 운영, 사무 등 다른 직무와도 잘 어울리시네요. 그리고, 동기보다 선임 둘 중에 고르자면 <span>선임</span>이 좋은 회사를 선호하는 특징이 있습니다. :-)"
};

export default result4_8;
