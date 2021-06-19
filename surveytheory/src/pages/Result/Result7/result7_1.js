import React from "react";
import "../result.css";

class result7_1 extends React.Component {
    render() {
        const subject_name = this.props.subject_name;
        const imgUrl = "/images/result/type7/frontend.png";
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
result7_1.defaultProps = {
    subject_name: "나와 어울리는 개발자 포지션은?",
    sub_context:
        "프론트엔드 개발자란? 사용자 (Client; 클라이언트)가 직접 사용하는 화면을 개발하는 사람이에요. <br/> 당신은 순도 100%의 프론트엔드 개발자! 백엔드 개발을 할 때마다 이건 아니다 싶은 느낌을 받으실때가 있었나요? <br/> 이참에 프론트엔드 전문가로 깊게 파고들어 보세요! 어디든 당신을 환영합니다~ <br/> 당신이 만든 버튼, 메뉴를 사용하며 만족스러워 할 사용자들이 있습니다! <br/> 이 분야로 더욱 성장하실거예요! 화이팅~"
};

export default result7_1;
