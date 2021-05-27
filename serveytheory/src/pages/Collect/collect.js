import React from "react";
import "./collect.css";

class collect extends React.Component {
    render() {
        const result = this.props.result;
        return (
            <div className="collect">
                <div className="test_result">테스트 결과</div>
                <div className="container">
                    <div className="box">
                        <ul>
                            <li>{result}</li>
                            <li>{result}</li>
                            <li>{result}</li>
                            <li>{result}</li>
                            <li>{result}</li>
                            <li>{result}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

// 기본 props 값
collect.defaultProps = {
    result: "테스트 주제 이름"
};

export default collect;
