import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import "./Question2_1";
import { number1} from "./Question2_1";
import { useHistory } from 'react-router-dom';

function Question2_7() {
    //0으로 초기값 설정
    const history = useHistory();
    const onIncrease = () => {
        number1.count1+=20;
        console.log(number1);
        if(number1.count1>=70 && number1.count1<=100){
                history.push("./result2_1");
        }else if(number1.count1>=101 && number1.count1<=131){
                history.push("./result2_2");
        }else{
            history.push("./result2_3");
        }
        number1.count1-=number1.count1;
    };
    const onDecrease = () => {
        number1.count1+=10;
        console.log(number1);
        if(number1.count1>=70 && number1.count1<=100){
            history.push("./result2_1");
    }else if(number1.count1>=101 && number1.count1<=131){
            history.push("./result2_2");
    }else{
        history.push("./result2_3");
    }
    number1.count1-=number1.count1;
    };
    // 70 - 100 : 101 - 130 : 131 - 170
    const question_title = "Q7. 나는 남들보다 구글링을 잘 하는 편이다.";
    const btn1 = "YES"; //20
    const btn2 = "NO"; //10
    return (
        <div className="Question">
            <div className="container">
                <progress id="progressbar" value="35" max="100"></progress>
                <div
                    className="question_title"
                    // html 형태로 렌더링 허용
                >
                    {question_title}
                </div>

                <div className="buttons">
                        <Button onClick={() => onIncrease()}>{btn1}</Button>
                    <br />
                        <Button onClick={() => onDecrease()}>{btn2}</Button>
                </div>
            </div>
        </div>
    );
}
export default Question2_7;
