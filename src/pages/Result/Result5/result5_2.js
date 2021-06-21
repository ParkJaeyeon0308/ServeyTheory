import React from "react";
import "../result.css";

class result5_2 extends React.Component {
    render() {
        const subject_name = this.props.subject_name;
        const imgUrl = "/images/result/type5/junior.png";
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
result5_2.defaultProps = {
    subject_name: "나는 몇 년차 개발자의 마인드일까?",
    sub_context:
        "당신은 <span>주니어 개발자</span>의 마인드를 가지고 있으시군요! <br/> 개발이 없는 삶은 허전하게 느껴질 정도로 개발을 접한지 어느정도 되셨군요! 시니어 개발자가 되기 위해 조금 더 노력해요~ :-)"
};

export default result5_2;
