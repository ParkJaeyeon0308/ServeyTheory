import React from "react";
import "../result.css";

class result9_3 extends React.Component {
    render() {
        const subject_name = this.props.subject_name;
        const imgUrl = "/images/" + subject_name + ".png";
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
                            onClick={() => this.props.history.push("/collect")}
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
result9_3.defaultProps = {
    subject_name: "팀플에서 나의 포지션은?",
    sub_context:
        "'친구가 지시하는대로 꼭 해야하는 것만. 최소한 해야할것만 하고 좀 쉬어야겠다. 피곤하다!' 라고 말하는 당신은 <br/> 항상 볼 수 있는 팀프로젝트 내의 포지션이예요.  <br/> 하지만 마냥 좋은 것은 아닙니다. <br/> 당신 스스로의 성장과 실력의 인정을 받고 더 나은 환경에서 성장 할 수 있는 기회를 놓치고 있어요! <br/> 당신은 리더까진 아니더라도 현재 충분히 성장 할 가능성이 있어요.<br/> 조금만 더 의욕을 갖고 지금 해야할 할 일에서 한 가지 더 할 수 있는 사람이 되도록 <br/> 참을성과 인내를 길러보는 것도 좋은 방법 입니다. 화이팅 !"
};

export default result9_3;
