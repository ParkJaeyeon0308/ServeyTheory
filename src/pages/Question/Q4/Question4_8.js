import React from "react";
import "../question.css";
import Button from "../../../component/Button";
import "./Question4_2";
import { str1} from "./Question4_2";

function Question4_7(){
    const onIncrease = () => {
        str1.mbti1+="Y"
        console.log(str1)
        // if(str1.mbti1 == ""){
        //     c
        // }
};
    const onDecrease = () => {
        str1.mbti1+="W"
        console.log(str1)
    };
        const question_title = "Q8. 둘 중 당신의 선택은?";
        const btn1 ="주말에 반 강제로 출근하고 경제적으로 여유로운 한달을 보낸다"; //Y
        const btn2 = "토요일에 오후 3시까지 늦잠자고 일어나서 심적으로 여유로운 한달을 보낸다"; //W
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="100" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Button
                            onClick={() =>onIncrease() }
                        >
                            {btn1}
                        </Button>
                        <br />
                        <Button
                            onClick={() =>onDecrease()}
                        >
                           {btn2}
                        </Button>
                    </div>
                </div>
            </div>
        );
    };
export default Question4_7;
