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
    type_name: "백엔드 개발자",
    sub_context:
    "백엔드 개발자란? 구성요소들이 작동할 수 있게 하는 기술을 만들고 유지하는 개발을 하는 개발자</br>" +
    "<br>"+
        "당신은 순도 100의 백엔드 개발자! 디자인이나 화면 구조 설정은 영 아닌 당신 !</br>" +
        "이참에 백엔드 전문가로 깊게 파고 들어 보세요~</br> "+
        "어디든 당신을 환영 합니다! 당신이 만든 기능을 사용하며 삶의 질이 올라갈 사용자들이 있습니다 !</br>"+
        "이 분야로 더욱 성장하실거예요! 화이팅~"
        
};

export default result;
