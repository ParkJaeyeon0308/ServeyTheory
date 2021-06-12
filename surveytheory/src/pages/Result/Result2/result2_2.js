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
    type_name: "딱 3개월 컷!",
    sub_context:
        "당신은 부지런한 타입이군요. </br>" +
        "과제를 우선시하고 제출날짜를 지키는 편이에요.</br> " + 
        "당신은 3개월 프로젝트가 주어졌을때 딱 3개월 컷 할 수 있을거예요!"
};

export default result;
