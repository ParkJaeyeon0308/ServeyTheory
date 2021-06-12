import React from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 
import "./Question4_1";
import { str1, str2 } from "./Question4_1";

function Question4_5(){
    const onIncrease = () => {str1.mbti1+="a"
    console.log(str1)};
    const onDecrease = () => {str2.mbti2+="g"
        console.log(str2)};
        const question_title = "Q5. 나는 돈만 많이 주면 야근도 자주할 수 있다.";
        const btn1 ="YES"; //w
        const btn2 = "NO"; //y
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="100" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Link to="/">
                        <Button
                            onClick={() =>onIncrease() }
                        >
                            {btn1}
                        </Button></Link>
                        <br />
                        <Link to="/">
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