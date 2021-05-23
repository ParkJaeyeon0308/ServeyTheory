import React from "react";
import "./result.css";

function result() {
    const text = {
        type: "테스트 타입",
        context:
            "테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명테스트 타입에 대한 설명"
    };
    return (
        <div className="result">
            <div className="container">
                <div className="type">"{text.type}"</div>
                <div className="context">{text.context}</div>
            </div>
        </div>
    );
}

export default result;
