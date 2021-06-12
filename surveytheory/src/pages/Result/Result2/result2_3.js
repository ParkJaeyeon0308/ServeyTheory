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
    type_name: "당신은 조금 게으르군요.",
    sub_context:
        "괜찮아요! 전체 타입의 60퍼센트가 이 타입이거든요. </br>" +
        "그래도 당신은 3개월 프로젝트가 주어졌을때, </br> 3개월 하고 하루만 더 있으면 " +
        "마칠 수 있을거예요!"
};

export default result;
