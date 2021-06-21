import React from "react";
import "../result.css";

import $ from "jquery";
window.$ = $;

class result7_2 extends React.Component {
    render() {
        $(document).ready(function () {
            setTimeout(function () {
                $(".loader").delay(3000).fadeOut(1500);
            });
        });

        const subject_name = this.props.subject_name;
        const imgUrl = "/images/result/type7/backend25_frontend75.png";
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
result7_2.defaultProps = {
    subject_name: "나와 어울리는 개발자 포지션은?",
    sub_context:
        "당신은 <span>프론트엔드 개발자</span>에 더욱 가깝지만 충분히 주요 기능도 개발 하실 수 있네요! 조금만 백엔드에 대해 공부하고 프론트엔드를 보충한다면 풀스텍 개발자가 될 수 있어요! <br/><br/> 프론트엔드 개발자란? 사용자 (Client; 클라이언트)가 <span>직접 사용하는 화면을 개발하는 사람</span>이에요. 그리고 백엔드 개발자는 <span>구성요소들이 작동할 수 있게 하는 기술을 만들고 유지하는 개발</span>을 하는 개발자입니다. <br/><br/> 프로젝트를 진행 할때 인력이 부족하다면 직접 주요 기능을 개발 할 수도 있어요~ 매 프로젝트마다 성장하는 개발자가 되시겠네요. :-) <br/> 당신의 성장을 응원합니다~!"
};

export default result7_2;
