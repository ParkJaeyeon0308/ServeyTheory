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
    type_name: "컴파일 언어",
    sub_context:
        "당신은 비교적 코드가 복잡하지만 과거부터 핵심적이였고 아직도 선두를 달리고 있는 언어를 선호하시군요! </br>" +
        "대표적으로 카카오톡과 같은 어플이 있고, 실행속도가 빠르며 접근성이 높은 편이에요. </br>" +
        "c언어, java를 대표로 하는 컴파일 언어를 배워보시면 좋을 것 같네요. </br>" +
        "컴파일 언어는 소스 코드 여러개를 묶어서 컴파일한 후에 실행되는 언어로,  </br>" +
        "코드가 복잡해서 초보자에겐 장벽이 높을 수 있지만 처리 속도가 빠르죠. </br>" +
        "정보보안이나 운영체제, 어플리케이션, 게임 분야에 관심 있으신 분들께 추천드려요~"
};

export default result;
