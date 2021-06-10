import React from "react";
import "../result.css";

class result2_3 extends React.Component {
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
                        <button
                            className="main_btn"
                            onClick={() => this.props.history.push("/")}
                        >
                            {mainBtn}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

// 기본 props 값
result2_3.defaultProps = {
    subject_name: "3개월 프로젝트가 주어졌을 때<br/> 내가 해낼 수 있는 기간은?",
    main_context: "3개월 하고 하루만 더 주세요",
    sub_context:
        "괜찮아요! 전체 타입의 60%가 이 타입이거든요. </br> 그래도 당신은 3개월 프로젝트가 주어졌을 때, 3개월 하고 하루만 더 있으면 마칠 수 있을거예요!"
};

export default result2_3;
