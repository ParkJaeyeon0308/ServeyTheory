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
    type_name: "당신은 웹과 더 잘맞는 성향이시군요?",
    sub_context:
        "웹이란? 월드 와이드 웹의 준말로 크롬과같은 브라우저에서" +
        "동작하는 홈페이지와 같은 서비스예요. </br> 접근성이 낮고 상대적으로 저렴하게 개발할 수있어요.  </br> "+
        "웹을 더 많이 사용하고 간편한 것을 좋아하는 당신은 웹 개발을 할 때 더 흥미를 느낄 수 있을거예요!  </br> "
};

export default result;
