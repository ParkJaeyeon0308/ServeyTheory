import React from "react";
import "../result.css";

class result8_2 extends React.Component {
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
                        className="main_context"
                        // html 형태로 렌더링 허용
                        dangerouslySetInnerHTML={{ __html: main_context }}
                    ></div>
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
result8_2.defaultProps = {
    subject_name: "내가 잘할 것 같은 프로그래밍 언어는?",
    main_context: "컴파일 언어",
    sub_context:
        "당신은 비교적 코드가 복잡하지만 과거부터 핵심적이였고 지금도 선두를 달리고 있는 언어를 선호하시군요! <br/> 대표적으로 카카오톡 어플이 있고, 실행속도가 빠르며 접근성이 높은 편이에요. <br/> c, Java가 대표로하는 컴파일 언어를 배워보시면 좋을 것 같아요. <br/> 컴파일 언어는 소스 코드 여러 개를 묶어서 컴파일한 후에 실행되는 언어로,  <br/> 코드가 복잡해서 초보자에겐 어려울 수도 있지만, 처리 속도가 빠르죠. <br/> 정보보안이나 운영체제, 어플리케이션, 게임 분야에 관심 있으신 분들께 추천드려요~"
};

export default result8_2;
