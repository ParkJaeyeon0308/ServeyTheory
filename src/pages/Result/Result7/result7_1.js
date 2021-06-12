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
    type_name: "프론트엔드 개발자",
    sub_context:
        "프론트엔드 개발자란? 사용자 (Client 클라이언트) 가 직접 사용하는 화면을 개발 하는 개발자</br>" +
        "<br>"+
        "당신은 순도 100의 프론트엔드 개발자! 백엔드 개발을 할때마다 이건 아니다 싶은 느낌을 받으실때가 있었나요?</br>" +
        "이참에 프론트엔드 전문가로 깊게 파고들어 보세요! 어디든 당신을 환영합니다~</br>"+
        "당신이 만든 버튼, 메뉴를 사용하며 만족스러워할 사용자들이 있습니다!</br>"+
        "이 분야로 더욱 성장하실거예요! 화이팅~"
        
};

export default result;
