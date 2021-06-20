import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import "./Question2_1";
import { Link } from "react-router-dom";
import { number1} from "./Question2_1";

function Question2_4() {
    //0으로 초기값 설정
    const onIncrease = () => {
        number1.count1+=10;
        console.log(number1);
    };
    // const onDecrease = () => {
    //     number2.count2+=30;
    //     number1.count1 + 10;
    //     console.log(number1);
    // };
    const onDecrease = () => {
        number1.count1 += 30;
        console.log(number1);
    };
    const question_title =
        <>Q4. 유튜브 알고리즘이 나를 이끈다...<br/> 하지만 과제 마감은 이틀 뒤! 당신은?</>
    const btn1 = "으어어... 알고리즘에.. 서서히.. 이끌린다아.."; //10
    const btn2 =
        <>이틀뒤면 얼마 안남았잖아???<br/> 큰일이다..ㅠㅠ 바로 과제를 시작한다</> //30
    return (
        <div className="Question">
            <div className="container">
                <progress id="progressbar" value="56" max="100"></progress>
                <div
                    className="question_title"
                    // html 형태로 렌더링 허용
                >
                    {question_title}
                </div>

                <div className="buttons">
                    <Link to="./Question2_5">
                        <Button onClick={() => onIncrease()}>{btn1}</Button>
                    </Link>
                    <br />
                    <Link to="./Question2_5">
                        <Button onClick={() => onDecrease()}>{btn2}</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Question2_4;
