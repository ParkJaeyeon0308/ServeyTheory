import React from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 
import "./Question4_1";
import { str1, str2 } from "./Question4_1";

function Question4_3(){
    const onIncrease = () => {str1.mbti1+="s"
    console.log(str1)};
    const onDecrease = () => {str2.mbti2+="j"
        console.log(str2)};
        const question_title = "Q3. 다음중 더 끌리는 단어는?";
        const btn1 ="세련된"; //s
        const btn2 = "체계적인"; //j
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="17" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Link to="./Question4_4">
                        <Button
                            onClick={() =>onIncrease() }
                        >
                            {btn1}
                        </Button></Link>
                        <br />
                        <Link to="./Question4_4">
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
export default Question4_3;