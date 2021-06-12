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
    type_name: "버스타기 장인",
    sub_context:
        '"귀찮다. 언제 끝나지? 하기 싫은데 어렵다고 하고 다른 친구들한테 넘기고 싶다. 힘들어 죽겠다!"' +
        "당신은 버스타기 장인입니다." +
        "엄살이 심해서 큰 일을 성공하지 못하고 긍정적인 마음을 가질 수 없는 마인드를 갖고 있어서 다른 사람들과 싸울 가능성도 큽니다."+
        "미래 지향적인 마음을 가지고 지금 힘들지 않으면 나중엔"+
        "아무것도 못할 것이라는 마음을 갖고 다른 친구들에게 피해가지 않게 조금만이라도 의욕을 가지면 훨씬 좋겠어요!"+
        "취업을 하고 회사에서 프로젝트를 기획하고 개발하는 과정에서 많은 어려움을 겪을 수 있어요."+
        "자기개발에 힘써주세요! 화이팅 !"
        
};

export default result;
