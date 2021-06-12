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
    type_name: "프론트엔드 25% : 백엔드 75%의 개발자",
    sub_context:
    "프론트엔드 개발자란? 사용자 (Client 클라이언트) 가 직접 사용하는 화면을 개발 하는 개발자</br>" +
    "백엔드 개발자란? 구성요소들이 작동할 수 있게 하는 기술을 만들고 유지하는 개발을 하는 개발자</br>" +
    "<br>"+
        "당신은 백엔드 개발자에 더욱 가깝지만 프로젝트를 진행할때 프론트엔드 개발자가 부족하다면 당신이 직접 개발 하실수도 있어요!</br>"+
        "프론트엔드에 대해 조금 더 공부하고 백엔드를 보충한다면 풀스텍 개발자가 되실 수도 있겠네요!</br>"+
        "매 프로젝트 마다 성장하는 개발자가 되시겠어요!</br>"+
        "당신의 성장을 응원합니다~"
        
};

export default result;
