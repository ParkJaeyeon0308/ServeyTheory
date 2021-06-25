import React from "react";
import "../result.css";
import Login, { user_id } from "../../Login/login";

class result7_2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subject_name: "나와 어울리는 개발자 포지션은?",
            survey_url: "7_2"
        };
    }

    onclick = () => {
        const textbox = {
            inText: user_id.user_id,
            inText1: this.state.subject_name,
            inText2: this.state.survey_url
        };

        if (user_id.user_id != "novalue") {
            // id 값이 있으면
            fetch("http://surveytheory.emirim.kr:3001/save", {
                // server.js의 login 메소드 사용
                method: "post", //통신방법
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(textbox) // 위에 정의한 textbox
            })
                .then((res) => res.json())
                .then((json) => {
                    console.log(json);
                    this.setState({
                        user_id: json.user_id,
                        subject_name: json.subject_name,
                        survey_url: json.survey_url
                    });
                });
            alert("결과가 저장되었습니다.");
        } else {
            alert("먼저 로그인하세요.");
            this.props.history.push("./login");
        }
    };

    render() {
        const subject_name = this.props.subject_name;
        const imgUrl = "/images/result/type7/backend25_frontend75.png";
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
                        <button className="save_btn" onClick={this.onclick}>
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
