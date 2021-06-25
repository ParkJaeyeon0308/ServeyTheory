import React from "react";
import "../result.css";
import Login, { user_id } from "../../Login/login";

class result2_3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subject_name:
                "3개월 프로젝트가 주어졌을 때 내가 해낼 수 있는 기간은?",
            survey_url: "2_3"
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
        const imgUrl = "/images/result/type2/3month_1day.png";
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
result2_3.defaultProps = {
    subject_name: "3개월 프로젝트가 주어졌을 때<br/> 내가 해낼 수 있는 기간은?",
    sub_context:
        "당신은 <span>조금 게으른 타입</span>이네요. <br/> 그렇지만 괜찮아요! 전체 타입의 60%가 이 타입이거든요. 그래도 당신은 3개월 프로젝트가 주어졌을 때, <span>3개월 하고 하루만 더</span> 있으면 완성해 낼 수 있어요!"
};

export default result2_3;
