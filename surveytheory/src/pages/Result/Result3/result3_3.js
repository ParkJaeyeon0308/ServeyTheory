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
    type_name: "3학년",
    sub_context:
        "당신은 진정한 미림인입니다. 혹시 3학년인가요? </br>" +
        "프로젝트와 개발 경험들로 취업까지 하셨을지 모르겠네요.</br>" +
        "당신의 앞길을 응원합니다!</br>"
        
};

export default result;
