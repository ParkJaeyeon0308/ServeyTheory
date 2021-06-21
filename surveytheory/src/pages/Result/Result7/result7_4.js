import React from "react";
import "../result.css";

import $ from "jquery";
window.$ = $;

class result7_4 extends React.Component {
    render() {
        $(document).ready(function () {
            setTimeout(function () {
                $(".loader").delay(3000).fadeOut(1500);
            });
        });

        const subject_name = this.props.subject_name;
        const imgUrl = "/images/result/type7/backend.png";
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
result7_4.defaultProps = {
    subject_name: "나와 어울리는 개발자 포지션은?",
    sub_context:
        "당신은 <span>순도 100%의 백엔드 개발자!</span> 디자인이나 화면 구조 설정은 영 아닌 당신 ! <br/> 이참에 백엔드 전문가로 깊게 파고 들어가보세요~ <br/><br/> 백엔드 개발자란? <span>구성요소들이 작동할 수 있게 하는 기술을 만들고 유지하는 개발</span>을 하는 개발자입니다. 어디든 당신을 환영해 제작한 기능을 사용하며 삶의 질이 올라갈 사용자들이 많아질 것 같네요 :-) 이 분야로 더욱 성장하실거예요! 화이팅~"
};

export default result7_4;
