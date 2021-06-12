import React from "react";
import "../result.css";

class result2_2 extends React.Component {
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
result2_2.defaultProps = {
    subject_name: "3개월 프로젝트가 주어졌을 때<br/> 내가 해낼 수 있는 기간은?",
    main_context: "딱 3개월!",
    sub_context:
        "당신은 부지런한 타입이군요. </br> 과제를 우선시하고 제출날짜를 지키는 편이에요. 당신은 3개월 프로젝트가 주어졌을 때 딱 3개월 컷 할 수 있을거예요!"
};

export default result2_2;
