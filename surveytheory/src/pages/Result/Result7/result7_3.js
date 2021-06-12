import React from "react";
import "../result.css";

class result7_3 extends React.Component {
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
                        <a href="#">
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
result7_3.defaultProps = {
    subject_name: "나와 어울리는 개발자 포지션은?",
    main_context: "프론트엔드 25% : 백엔드 75%의 개발자",
    sub_context:
    "프론트엔드 개발자란? 사용자 (Client 클라이언트) 가 직접 사용하는 화면을 개발 하는 개발자</br>" +
    "백엔드 개발자란? 구성요소들이 작동할 수 있게 하는 기술을 만들고 유지하는 개발을 하는 개발자</br>" +
    "<br>"+
        "당신은 백엔드 개발자에 더욱 가깝지만 프로젝트를 진행할때 프론트엔드 개발자가 부족하다면 당신이 직접 개발 하실수도 있어요!</br>"+
        "프론트엔드에 대해 조금 더 공부하고 백엔드를 보충한다면 풀스텍 개발자가 되실 수도 있겠네요!</br>"+
        "매 프로젝트 마다 성장하는 개발자가 되시겠어요!</br>"+
        "당신의 성장을 응원합니다~"
        
};

export default result7_3;
