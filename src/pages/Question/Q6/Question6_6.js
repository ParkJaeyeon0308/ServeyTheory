import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link, useHistory} from "react-router-dom"; 
import "./Question6_1";
import { number1, number2, number3 } from "./Question6_1";

function Question6_6(){
    const history = useHistory();
    const onPlus1 = () => {
        number1.count1++;
        console.log(number1.count1);
        if(number1.count1>number2.count2){
            if(number1.count1>number3.count3){
            history.push('./result6_3');
            }
        }else if(number2.count2>number1.count1){
            if(number2.count2>number3.count3){
            history.push('./result6_1');
            }
        }else{
            history.push('./result6_2');
        }
        number1.count1 -=number1.count1;
        number2.count2 -=number2.count2;
        number3.count3 -=number3.count3;
    };
    const onPlus2 = () => {
        number2.count2++;
        console.log(number2);
        if(number1.count1>number2.count2){
            if(number1.count1>number3.count3){
            history.push('./result6_3');
            }
        }else if(number2.count2>number1.count1){
            if(number2.count2>number3.count3){
            history.push('./result6_1');
            }
        }else{
            history.push('./result6_2');
        }
        number1.count1 -=number1.count1;
        number2.count2 -=number2.count2;
        number3.count3 -=number3.count3;
    };
    const onPlus3 = () => {
        number3.count3++;
        console.log(number3);
        if(number1.count1>number2.count2){
            if(number1.count1>number3.count3){
            history.push('./result6_3');
            }
        }else if(number2.count2>number1.count1){
            if(number2.count2>number3.count3){
            history.push('./result6_1');
            }
        }else{
            history.push('./result6_2');
        }
        number1.count1 -=number1.count1;
        number2.count2 -=number2.count2;
        number3.count3 -=number3.count3;
    };
        const question_title = "Q6. 이런 과가 좋아 ~";
        const btn1 ="어떤 과랑 해도 상관없는 과가 좋아"; //
        const btn2 = "내 것만 잘하면 되겠어"; //
        const btn3 = "내 영향이 컸음 좋겠다"; //
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="17" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Button
                            onClick={() =>onPlus1() }
                        >
                            {btn1}
                        </Button>
                        <br />
                        <Button
                            onClick={() =>onPlus2()}
                        >
                           {btn2}
                        </Button>
                        <br />
                        <Button
                            onClick={() =>onPlus3()}
                        >
                           {btn3}
                        </Button>
                    </div>
                </div>
            </div>
        );
    };
export default Question6_6;

    // question_title: "Q6. 이런 과가 좋아 ~",
    // btn1: "어떤 과랑 해도 상관없는 과가 좋아", //D
    // btn2: "내 것만 잘하면 되겠어", //S
    // btn3: "내 영향이 컸음 좋겠다" //W
