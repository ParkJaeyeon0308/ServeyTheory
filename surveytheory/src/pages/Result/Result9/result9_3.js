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
    type_name: "평범한 팀원",
    sub_context:
        '"친구가 지시하는대로 꼭 해야하는 것만. 최소한 해야할것만 하고 좀 쉬어야겠다. 피곤하다!"' +
        "당신은 평범하지만 조금 불안합니다" +
        "항상 볼 수 있는 팀프로젝트 내의 포지션이예요. "+
        "하지만 마냥 좋다는 것은 아닙니다."+
        "당신 스스로의 성장과 실력의 인정을 받고 더 나은 환경에서 성장 할 수 있는 기회를 놓치고 있어요!"+
        "당신은 리더격까진 아니더라도 현재 충분히 성장할 가능성이 있어요."+
        "조금만 더 의욕을 갖고 지금 해야할 할일에서 한가지 더 할 수 있는 사람이 되어 보아요!"+
        "참을성과 인내를 길러보는 것도 좋은 방법 입니다. 화이팅 !"
};

export default result;
