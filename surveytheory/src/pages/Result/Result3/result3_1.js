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
    type_name: "1학년",
    sub_context:
        "당신은 아직 완벽히 미림화되진 않았군요. 혹시 1학년인가요? </br>" +
        "여러가지 프로젝트들과 개발을 하면서 생각이 조금씩 바뀔겁니다. </br>" +
        "2-3학년이 되었을때 테스트를 한번 더 해보세요 ㅎㅎ </br>"
        
};

export default result;
