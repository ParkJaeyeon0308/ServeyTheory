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
    type_name: "뉴미디웹솔루션과",
    sub_context:
        "엥? 이란 생각을 하셨다면 다시 한번 생각해 보세요.</br>" +
        "웹솔루션과는 선택과목과 교과과목에 백엔드 과목도 중간중간 있습니다만 과 특성 대체적으로 프론트엔드 분야입니다.</br>" +
        "디자인 수업, 선택 백엔드 수업, 웹사이트 프론트엔드 들을 주로 배우지요.</br>"+
        "자바, 파이썬을 기본으로 배우고 템플릿, 다양한 라이브러리를 활용한 웹 디자인%JS 개발 프레임워크를 활용한</br>"+
        "웹개발 포토샵을 활용한 UI/UX 수업 등 소프트웨어과에 비해 다양한 수업을 하지만 원하시는 만큼 깊게 배우지 못할 수도 있어요.</br>"+
        "다양한 경험을 쌓고 싶다면 웹솔루션과!</br>"+
        "이미 다른 과 이시라면 이렇게 본인의 성향을 생각해 공부하시는 것도 좋은 방법 중 하나네요!"
        
};

export default result;
