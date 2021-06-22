import React from "react";
import "../result.css";
import Login, { user_id } from "../../Login/login";

class result9_4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subject_name: "팀플에서 나의 포지션은?",
            survey_url: "9_4"
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
        const imgUrl = "/images/result/type9/bad.png";
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
result9_4.defaultProps = {
    subject_name: "팀플에서 나의 포지션은?",
    sub_context:
        '"귀찮다. 언제 끝나지? 하기 싫은데 어렵다고 하고 다른 친구들한테 넘기고 싶다. 힘들어 죽겠다!" 라고 말하는 당신은 <span>버스타기 장인</span>입니다. <br/><br/> 엄살이 심해서 큰 일을 성공하지 못하고 긍정적인 마음을 가질 수 없는 마인드를 갖고 있어서 다른 사람들과 싸울 가능성도 크네요. :-( <br/> 미래 지향적인 마음으로 팀원과 함께 협력하며 조금만 더 힘내볼까요? <br/><br/> 취업 후 회사에서 프로젝트를 기획하고 개발하는 과정에서 많은 어려움을 겪을 수도 있으니 더욱 더 자기개발에 힘 써주세요! 화이팅 !'
};

export default result9_4;
