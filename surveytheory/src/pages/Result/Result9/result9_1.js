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
    type_name: "리더",
    sub_context:
        '"내가 좀 힘들더라고 총대매서 확실하게 진행해서 성공적인 결과를 이끌어내고 싶어!"' +
        "당신은 리더 포지션 입니다." +
        "물론 리더를 정해서 프로젝트를 진행할 수 도 있죠. 하지만 암묵적 리더가 될수도 있습니다."+
        "당신은 어떤 프로젝트를 진행하든 리더가 되어 팀을 이끌 것입니다!"+
        "벅차고 힘들고 지칠 수 있어요 하지만 좋은 결과를 위해 나의 성장을 위해 조금만 힘내줘요~"
        
};

export default result;
