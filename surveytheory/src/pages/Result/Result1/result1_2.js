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
    type_name: "당신은 앱과 더 잘맞는 성향이시군요?",
    sub_context:
        "앱이란? 애플리케이션의 준말로 설치하여 사용하는 프로그램이에요. </br>" +
        "대표적으로 카카오톡과 같은 어플이 있고, 실행속도가 빠르며 접근성이 높은 편이에요. </br>" +
        "앱을 더 많이 사용하고 휴대폰을 사랑하는 당신은 앱 개발을 할 때 더 흥미를 느낄 수 있을거예요!" 
};

export default result;
