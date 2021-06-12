import React from "react";
import "../result.css";

class result5_1 extends React.Component {
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
                        <a href="#">
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
result5_1.defaultProps = {
    subject_name: "나는 몇 년차 개발자의 마인드일까?",
    main_context: "비기너",
    sub_context:
        "당신은 비기너 개발자의 마인드를 가지고 있습니다! <br/> 개발을 시작한지 얼마 되지 않으셨나요? 주니어, 시니어 개발자가 되려면 얼마 남지 않았습니다. 화이팅!"
};

export default result5_1;