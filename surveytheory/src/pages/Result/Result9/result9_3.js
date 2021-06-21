import React from "react";
import "../result.css";

import $ from "jquery";
window.$ = $;

class result9_3 extends React.Component {
    render() {
        $(document).ready(function () {
            setTimeout(function () {
                $(".loader").delay(3000).fadeOut(1500);
            });
        });

        const subject_name = this.props.subject_name;
        const imgUrl = "/images/result/type9/normal.png";
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
result9_3.defaultProps = {
    subject_name: "팀플에서 나의 포지션은?",
    sub_context:
        "'친구가 지시하는대로 꼭 해야하는 것만. 최소한 해야할것만 하고 좀 쉬어야겠다. 피곤하다!' 라고 말하는 당신은 항상 볼 수 있는 팀 프로젝트 내의 <span>팀원 포지션</span>입니다. <br/><br/> 하지만 마냥 좋은 것은 아니에요. 당신 스스로의 성장과 실력의 인정을 받고 더 나은 환경에서 성장 할 수 있는 기회를 놓치고 있어요! 당신은 지금도 충분히 성장 가능성이 있어요.<br/><br/> 조금만 더 의욕을 가지고 맡은 일에서 한 가지 더 할 수 있는 사람이 되도록 참을성과 인내심을 길러보는 것도 좋은 방법 입니다. :-)"
};

export default result9_3;
