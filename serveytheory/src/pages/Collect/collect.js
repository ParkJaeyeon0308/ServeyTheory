import React from "react";
import "./collect.css";

function collect() {
    const text = {
        result: "테스트 주제 이름"
    };
    return (
        <div className="collect">
            <div className="test_result">테스트 결과</div>
            <div className="container">
                <div className="box">
                    <ul>
                        <li>{text.result}</li>
                        <li>{text.result}</li>
                        <li>{text.result}</li>
                        <li>{text.result}</li>
                        <li>{text.result}</li>
                        <li>{text.result}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default collect;
