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
    type_name: "뉴미디어소프트웨어과",
    sub_context:
        "당신은 뉴미디어소프트웨어과랑 잘 어울려요!</br>" +
        "엥? 이란 생각을 하셨다면 다시 한번 생각해 보세요.</br>" +
        "소프트웨어과에는 다양한 성향을 가진 친구들이 있지만 보통 백엔드 분야를 배워 작게 프론트 엔드 분야를 를 접목시키죠.</br>"+
        "개발과의 기본 JAVA,PYTHON, C++, SPRING 등 다른 과보단 확실히 처음엔 새로 무언가를 배우기보단 활용하는 방향으로 깊게 배울 수 있어요.</br>"+
        "이미 다른 과 이시라면 이렇게 본인의 성향을 생각해 공부하시는 것도 좋은 방법 중 하나네요!"
        
};

export default result;
