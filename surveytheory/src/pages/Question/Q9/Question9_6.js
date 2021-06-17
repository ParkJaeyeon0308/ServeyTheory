import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import "./Question9_1";
import { number1, number2, number3,number4 } from "./Question9_1";
import { useHistory } from 'react-router-dom';

function Question9_6(){
    const history = useHistory();
    const onPlus1 = () => {
        number1.count1++;
        console.log(number1);
        if(number1.count1>number2.count2){
            if(number1.count1>number3.count3){
                if(number1.count1>number4.count4){
                    history.push("./result9_1");
                }
            }
        }else if(number2.count2>number1.count1){
            if(number2.count2>number3.count3){
                if(number2.count2>number4.count4){
                    history.push("./result9_2");
                }
            }
        }else if(number3.count3>number1.count1){
            if(number3.count3>number2.count2){
                if(number3.count3>number4.count4){
                    history.push("./result9_3");
                }
            }
        }else{
            history.push("./result9_4");
        }
        number1.count1 -=number1.count1;
        number2.count2 -=number2.count2;
        number3.count3 -=number3.count3;
        number4.count4 -=number4.count4;
    };
    const onPlus2 = () => {
        number2.count2++;
        console.log(number2);
        if(number1.count1>number2.count2){
            if(number1.count1>number3.count3){
                if(number1.count1>number4.count4){
                    history.push("./result9_1");
                }
            }
        }else if(number2.count2>number1.count1){
            if(number2.count2>number3.count3){
                if(number2.count2>number4.count4){
                    history.push("./result9_2");
                }
            }
        }else if(number3.count3>number1.count1){
            if(number3.count3>number2.count2){
                if(number3.count3>number4.count4){
                    history.push("./result9_3");
                }
            }
        }else{
            history.push("./result9_4");
        }
        number1.count1 -=number1.count1;
        number2.count2 -=number2.count2;
        number3.count3 -=number3.count3;
        number4.count4 -=number4.count4;
    };
    const onPlus3 = () => {
        number3.count3++;
        console.log(number3);
        if(number1.count1>number2.count2){
            if(number1.count1>number3.count3){
                if(number1.count1>number4.count4){
                    history.push("./result9_1");
                }
            }
        }else if(number2.count2>number1.count1){
            if(number2.count2>number3.count3){
                if(number2.count2>number4.count4){
                    history.push("./result9_2");
                }
            }
        }else if(number3.count3>number1.count1){
            if(number3.count3>number2.count2){
                if(number3.count3>number4.count4){
                    history.push("./result9_3");
                }
            }
        }else{
            history.push("./result9_4");
        }
        number1.count1 -=number1.count1;
        number2.count2 -=number2.count2;
        number3.count3 -=number3.count3;
        number4.count4 -=number4.count4;
    };
    const onPlus4 = () => {
        number4.count4++;
        console.log(number4);
        if(number1.count1>number2.count2){
            if(number1.count1>number3.count3){
                if(number1.count1>number4.count4){
                    history.push("./result9_1");
                }
            }
        }else if(number2.count2>number1.count1){
            if(number2.count2>number3.count3){
                if(number2.count2>number4.count4){
                    history.push("./result9_2");
                }
            }
        }else if(number3.count3>number1.count1){
            if(number3.count3>number2.count2){
                if(number3.count3>number4.count4){
                    history.push("./result9_3");
                }
            }
        }else{
            history.push("./result9_4");
        }
        number1.count1 -=number1.count1;
        number2.count2 -=number2.count2;
        number3.count3 -=number3.count3;
        number4.count4 -=number4.count4;
    };
        const question_title = "Q6. 개발 후 발표까지 끝났을 때 팀원들이 <br/> 당신에게 해주는 말은?";
        const btn1 ='"너 덕분에 더 빨리 끝낼 수 있었어! 발표까지 완벽했다"'; //리더
        const btn2 = '"진짜 수고 많았어! 이제 푹 쉬어!"'; //부회장
        const btn3 = '"수고했다"'; //평범
        const btn4 = "웃음"; //버스타기장인
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
                        <br />
                        <Button
                            onClick={() =>onPlus4()}
                        >
                           {btn4}
                        </Button>
                    </div>
                </div>
            </div>
        );
    };
export default Question9_6;
