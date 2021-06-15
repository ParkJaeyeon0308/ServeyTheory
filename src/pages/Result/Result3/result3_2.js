import React from "react";
import "../result.css";

class result3_2 extends React.Component {
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
result3_2.defaultProps = {
    subject_name: "정신학년테스트",
    sub_context:
        "당신은 미림화 진행 중 입니다! 혹시 2학년인가요? <br/> 프로젝트 경험들로 많은 것을 깨닫고 있는 시기입니다. 끝까지 미림에서 잘 버텨내길 바랍니다."
};

export default result3_2;
