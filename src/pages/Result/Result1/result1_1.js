/* eslint-disable no-sequences */
import React from "react";
import "../result.css";
import Login, { user_id } from "../../Login/login";
import { number1, number2 } from "../../Question/Q1/Question1_1";

export default class result1_1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subject_name: "웹, 앱 뭐가 더 잘 맞을까?",
            survey_url: "1_1"
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
        const imgUrl = "/images/result/type1/web.png";
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
result1_1.defaultProps = {
    subject_name: "웹, 앱 뭐가 더 잘 맞을까?",
    sub_context:
        "웹이란? <span>World Wide Web</span>의 준말로 사파리, 크롬과 같은 <span>브라우저에서 동작하는 홈페이지</span>와 같은 서비스예요. 접근성이 낮고 상대적으로 저렴하게 개발할 수있어요. <br/> 웹을 더 많이 사용하고 간편한 것을 좋아하는 당신은 웹 프로그래밍을 할 때 더 흥미를 느낄 수 있을거예요!"
};
