import React from "react";
import "../result.css";

class result9_4 extends React.Component {
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
result9_4.defaultProps = {
    subject_name: "팀플에서 나의 포지션은?",
    sub_context:
        "'귀찮다. 언제 끝나지? 하기 싫은데 어렵다고 하고 다른 친구들한테 넘기고 싶다. 힘들어 죽겠다!' 라고 말하는 당신은 버스타기 장인입니다. <br/> 엄살이 심해서 큰 일을 성공하지 못하고 긍정적인 마음을 가질 수 없는 마인드를 갖고 있어서 다른 사람들과 싸울 가능성도 큽니다. <br/> 미래 지향적인 마음을 가지고 지금 노력하지 않으면 나중엔 <br/> 아무것도 못 할 것이라는 마음을 가지고 다른 친구들에게 피해가지 않도록 조금만이라도 의욕을 가지면 훨씬 좋겠네요! <br/> 그리고 취업하고 회사에서 프로젝트를 기획하고 개발하는 과정에서 많은 어려움을 겪을 수 있어요. <br/> 자기개발에 힘 써주세요! 화이팅 !"
};

export default result9_4;
