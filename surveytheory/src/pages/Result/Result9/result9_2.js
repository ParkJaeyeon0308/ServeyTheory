import React from "react";
import "../result.css";

import $ from "jquery";
window.$ = $;

class result9_2 extends React.Component {
    render() {
        $(document).ready(function () {
            setTimeout(function () {
                $(".loader").delay(3000).fadeOut(1500);
            });
        });

        const subject_name = this.props.subject_name;
        const imgUrl = "/images/result/type9/aid.png";
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
result9_2.defaultProps = {
    subject_name: "팀플에서 나의 포지션은?",
    sub_context:
        "'리더쉽이나 불타오르는 열정은 없는 것 같은데 프로젝트는 성공적으로 마무리 하고 싶어!' 라고 말하는 당신은 리더를 도와 계획에 맞춰 열심히 참여할 수 있는 <span>부회장 포지션</span>입니다. <br/><br/> 팀을 이끄는 위치에 있기보다는 프로젝트를 성공하려는 목표로 리더와 합을 맞춰 성공적인 프로젝트를 마무리할 수 있어요~ 당신은 훗날 내면적, 기술적으로도 크게 성장해 리더 포지션을 가지고 있을 것 같네요. :-)"
};

export default result9_2;
