import React from "react";
import "../result.css";
import Login, {user_id} from "../../Login/login";

class result7_4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subject_name:"나와 어울리는 개발자 포지션은?",
            survey_url:"7_4"
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
        const imgUrl = "/images/result/type7/backend.png";
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
result7_4.defaultProps = {
    subject_name: "나와 어울리는 개발자 포지션은?",
    sub_context:
        "백엔드 개발자란? 구성요소들이 작동할 수 있게 하는 기술을 만들고 유지하는 개발을 하는 개발자입니다. <br/> 당신은 순도 100%의 백엔드 개발자! 디자인이나 화면 구조 설정은 영 아닌 당신 ! <br/> 이참에 백엔드 전문가로 깊게 파고 들어가보세요~ <br/> 어디든 당신을 환영 합니다! 당신이 만든 기능을 사용하며 삶의 질이 올라갈 사용자들이 있습니다 ! <br/> 이 분야로 더욱 성장하실거예요! 화이팅~"
};

export default result7_4;
