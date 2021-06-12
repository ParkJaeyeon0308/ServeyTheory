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
    type_name: "부회장",
    sub_context:
        '"리더쉽이나 불타오르는 열정은 없는 것 같은데 프로젝트는 성공적으로 마무리 하고 싶어!"' +
        "당신은 리더를 도와 계획에 맞춰 열심히 참여할 수 있는 부회장 포지션이예요~" +
        "리더만큼 의욕은 없지만 프로젝트를 성공하려는 의욕만큼은 남다른 당신!"+
        "리더와 합을 맞춰 성공적인 프로젝트를 마무리할 수 있어요~"+
        "당신은 훗날 내면적, 기술적으로도 크게 성장해 리더 포지션을 갖고 있을 수도 있네요 화이팅~!"     
};

export default result;
