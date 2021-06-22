import React from "react";
import "../result.css";
import Login, {user_id} from "../../Login/login";

class result9_2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            subject_name:"팀플에서 나의 포지션은?",
            survey_url:"9_2"
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
result9_2.defaultProps = {
    subject_name: "팀플에서 나의 포지션은?",
    sub_context:
        "'리더쉽이나 불타오르는 열정은 없는 것 같은데 프로젝트는 성공적으로 마무리 하고 싶어!' 라고 말하는 당신은 <br/> 리더를 도와 계획에 맞춰 열심히 참여할 수 있는 부회장 포지션이예요~ <br/> 리더만큼 의욕은 없지만 프로젝트를 성공하려는 의욕만큼은 남다른 당신! <br/> 리더와 합을 맞춰 성공적인 프로젝트를 마무리할 수 있어요~ <br/> 당신은 훗날 내면적, 기술적으로도 크게 성장해 리더 포지션을 갖고 있을 수도 있네요. 화이팅~!"
};

export default result9_2;
