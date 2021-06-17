import React from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 
import "./Question4_2";
import { str1, str2 } from "./Question4_2";

function Question4_5(){
    const onIncrease = () => {str1.mbti1+="S"
    console.log(str1)};
    const onDecrease = () => {str2.mbti2+="J"
        console.log(str2)};
        const question_title = "Q5. 다음 중 직감적으로 더 끌리는 단어는?";
        const btn1 ="세련된"; //S
        const btn2 = "체계적인"; //J
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="17" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Link to="./Question4_6">
                        <Button
                            onClick={() =>onIncrease() }
                        >
                            {btn1}
                        </Button></Link>
                        <br />
                        <Link to="./Question4_6">
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
export default Question4_5;
