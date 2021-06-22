import React from "react";
import "../result.css";
import Login, { user_id } from "../../Login/login";

class result3_1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subject_name: "정신학년테스트!",
            survey_url: "3_1"
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
        const imgUrl = "/images/result/type3/grade1.png";
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
result3_1.defaultProps = {
    subject_name: "정신학년테스트",
    sub_context:
        "당신은 아직 완벽히 미림화 되진 않았군요. 혹시 <span>1학년</span>이신가요? <br/> 여러가지 프로젝트들과 개발을 하면서 생각이 조금씩 바뀔겁니다. 2, 3학년이 되었을때 테스트를 한 번 더 해보세요 ㅎㅎ"
};

export default result3_1;
