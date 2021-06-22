import React from "react";
import "../result.css";
import Login, {user_id} from "../../Login/login";


class result4_1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            subject_name:"직장 mbti 테스트",
            survey_url:"4_1"
        };
    }

    onclick = () => {
        const textbox = { 
            inText: user_id.user_id,
            inText1: this.state.subject_name,
            inText2: this.state.survey_url
          };

        if(user_id.user_id != 'novalue'){ // id 값이 있으면
            fetch("http://localhost:3001/save", { // server.js의 login 메소드 사용
            method: "post", //통신방법
            headers: {
              "content-type": "application/json",
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
            alert('결과가 저장되었습니다.')
        } else {
            alert('먼저 로그인하세요.')
            this.props.history.push('./login')
        }

        
      };
    render() {
        const subject_name = this.props.subject_name;
        const imgUrl = "/images/result/type4/sygu.png";
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
                            onClick={this.onclick}
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
result4_1.defaultProps = {
    subject_name: "직장 mbti 테스트",
    sub_context:
        "당신은 sygu 유형입니다! <br/> 스타트업과 어울리고 워라밸보다 연봉을 중시하는 편입니다. 또, 다른 직무보다 개발이 어울리시는군요. 동기보다 선임 둘 중에 고르자면 선임이 좋은 회사를 선호할 것 같네요."
};

export default result4_1;
