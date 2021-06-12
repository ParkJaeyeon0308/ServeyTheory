import React from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 
import "./Question4_1";
import { str1, str2 } from "./Question4_1";

function Question4_4(){
    const onIncrease = () => {str1.mbti1+="g"
    console.log(str1)};
    const onDecrease = () => {str2.mbti2+="a"
        console.log(str2)};
        const question_title = "Q4. 당신은 어느쪽에 더 소질이 있으세요?";
        const btn1 ="나는 평생 개발로 일을 하고싶어!"; //g
        const btn2 = "나는 OA 마스터~"; //a
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="17" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Link to="./Question4_5">
                        <Button
                            onClick={() =>onIncrease() }
                        >
                            {btn1}
                        </Button></Link>
                        <br />
                        <Link to="./Question4_5">
                        <Button
                            onClick={() =>onDecrease()}
                        >
                           {btn2}
                        </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    };
export default Question4_4;