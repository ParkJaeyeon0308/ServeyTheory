import React from "react";
import "../result.css";

class result extends React.Component {
    render() {
        const type_name = this.props.type_name;
        const imgUrl = "/images/" + type_name + ".png";
        const sub_context = this.props.sub_context;
        return (
            <div className="result">
                <div className="container">
                    <div className="type">[ {type_name} ]</div>
                    <img className="type-img" src={imgUrl} alt={type_name} />
                    <div
                        className="sub_context"
                        // html 형태로 렌더링 허용
                        dangerouslySetInnerHTML={{ __html: sub_context }}
                    ></div>
                </div>
            </div>
        );
    }
}

// 기본 props 값
result.defaultProps = {
    type_name: "인터프리터 언어",
    sub_context:
        "당신은 간단하면서도 확실한 언어를 선호하시는군요! 이쪽에 재능이 있으실 수 있어요! </br>" +
        "이 분야는 프론트엔드의 경험을 쌓는데도 도움을 줄 수 있습니다.  </br> "+
        "파이썬, 자바스크립트(react, node) 를 대표로 인터프리터 언어를 배워보시면 좋을거 같네요.  </br> "
};

export default result;
