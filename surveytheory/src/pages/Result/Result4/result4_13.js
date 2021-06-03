import React from "react";
import "./result.css";

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
    type_name: "jwgu 유형",
    sub_context:
        "당신은 jwgu 유형입니다! </br>" +
        "스타트업보다 중소기업이 어울리고 연봉보다는 워라밸을 중시하는 편입니다. </br>" +
        "또, 다른 직무보다 개발이 어울리시는 군요. </br>" +
        "동기보다 선임 둘중에 고르자면 선임이 좋은 회사를 선호할 것 같네요."
        
};

export default result;
