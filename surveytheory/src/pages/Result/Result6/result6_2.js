import React from "react";
import "../result.css";
import Login, { user_id } from "../../Login/login";

class result6_2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subject_name: "나와 어울리는 과는?",
            survey_url: "6_2"
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
            fetch("http://localhost:3001/save", {
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
        const imgUrl = "/images/result/type6/solution.png";
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
result6_2.defaultProps = {
    subject_name: "나와 어울리는 과는?",
    sub_context:
        "당신은 <span>뉴미디어 웹솔루션과랑</span> 잘 어울려요! 엥? 이란 생각을 하셨다면 다시 한번 생각해 보세요. 웹솔루션과는 선택과목과 교과과목에 백엔드 과목이 중간중간 있지만, 과 특성 대체적으로 프론트엔드 분야입니다. <br/><br/> <span>디자인 수업, 백엔드 선택 수업, 웹 프론트엔드 언어</span>를 주로 배우지요. <span>Java, Python</span>을 기본으로 배우고 템플릿, 다양한 라이브러리를 활용한 웹 디자인과 JS 개발 프레임워크를 활용한 웹 개발, 포토샵을 활용한 UI/UX 수업 등 소프트웨어과에 비해 다양한 수업을 하지만 원하시는 만큼 깊게 배우지 못할 수도 있어요. <br/><br/> 다양한 경험을 쌓고 싶다면 웹솔루션과! 이미 다른 과 이시라면 이렇게 본인의 성향을 생각해 공부하시는 것도 좋은 방법 중 하나네요!"
};

export default result6_2;
