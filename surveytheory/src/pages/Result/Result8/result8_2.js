import React from "react";
import "../result.css";
import Login, { user_id } from "../../Login/login";

class result8_2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subject_name: "내가 잘할 것 같은 프로그래밍 언어는?",
            survey_url: "8_2"
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
        const imgUrl = "/images/result/type8/compiler.png";
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
result8_2.defaultProps = {
    subject_name: "내가 잘할 것 같은 프로그래밍 언어는?",
    sub_context:
        "당신은 비교적 코드가 복잡하지만 과거부터 핵심적이였고 지금도 선두를 달리고 있는 언어를 선호하시군요! <br/><br/> 대표적으로 카카오톡 어플이 있고, 실행속도가 빠르며 접근성이 높은 편이에요. <span>C, Java</span>가 대표로하는 <span>컴파일 언어</span>를 배워보시면 좋을 것 같아요. <br/><br/> 컴파일 언어는 소스 코드 여러 개를 묶어서 컴파일한 후에 실행되는 언어로, 코드가 복잡해서 초보자에겐 어려울 수도 있지만, 처리 속도가 빠르죠. 정보보안이나 운영체제, 어플리케이션, 게임 분야에 관심 있으신 분들께 추천드려요~"
};

export default result8_2;
