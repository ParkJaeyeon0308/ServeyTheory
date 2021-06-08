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
    type_name: "비기너",
    sub_context:
        "당신은 비기너 개발자의 마인드를 가지고 있습니다!" +
        "개발을 시작한지 얼마 되지 않으셨나요?" +
        "주니어, 시니어 개발자가 되려면 얼마 남지 않았습니다. 화이팅!"
        
};

export default result;
