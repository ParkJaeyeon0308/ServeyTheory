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
    type_name: "2학년",
    sub_context:
        "당신은 미림화 진행중입니다! 혹시 2학년인가요? </br>" +
        "프로젝트 경험들로 많은 것을 깨닫고 있는 시기입니다.</br>" +
        "끝까지 미림에서 잘 버텨내길 바랍니다.</br>"
        
};

export default result;
