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
    type_name: "시니어",
    sub_context:
        "당신은 시니어 개발자의 마인드를 가지고 있으시군요!" +
        "프로그래밍 밈도 사랑하셔서 어디가서 찐개발자라는 소리 많이 들으시죠?" +
        "당신의 개발라이프를 응원합니다!"
        
};

export default result;
