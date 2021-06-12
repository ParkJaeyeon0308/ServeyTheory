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
    type_name: "뉴미디어디자인과",
    sub_context:
        "엥? 이란 생각을 하셨다면 다시 한번 생각해 보세요.</br>" +
        "디자인과는 보이시는 것보다 더 다양하고 체계적으로 디자인 수업을 진행합니다.</br>" +
        "포스터, 브랜드 로고 등과 같은 시각 디자인 수업, 그래픽 영상 수업, 3D 제품 제작 수업, 웹 디자인,</br>"+
        "웹 디자인을 활요할 수 있는 웹코딩까지 다양한 수업이 있어요~</br>"+
        "이미 다른 과 이시라면 이렇게 본인의 성향을 생각해 공부하시는 것도 좋은 방법 중 하나네요!</br>"
        
};

export default result;
