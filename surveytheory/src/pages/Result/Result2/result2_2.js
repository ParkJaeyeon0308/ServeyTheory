import React from "react";
import "../result.css";

class result2_2 extends React.Component {
    render() {
        const subject_name = this.props.subject_name;
        const imgUrl = "/images/result/type2/3month.png";
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
result2_2.defaultProps = {
    subject_name: "3개월 프로젝트가 주어졌을 때<br/> 내가 해낼 수 있는 기간은?",
    sub_context:
        "당신은 <span>부지런한 타입</span>이네요. <br/> 귀찮더라도 과제를 우선시하고 제출 날짜를 지키는 편이에요. 당신은 3개월 프로젝트가 주어졌을 때 <span>딱 3개월 내</span>에 완성할 수 있을거예요!"
};

export default result2_2;
