import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 
import "./Question3_1";
import { number1} from "./Question3_1";
import { useHistory } from 'react-router-dom';

function Question3_8(){
    const history = useHistory();
    const onIncrease = () => {
        number1.count1+=10;
        console.log(number1);
        if(number1.count1>=80 && number1.count1<=130){
            history.push("./result3_1");
        }else if(number1.count1>=131 && number1.count1<=180){
            history.push("./result3_2");
        }else{
            history.push("./result3_3");
        }
        number1.count1-=number1.count1;
    };
    const onDecrease = () => {
        number1.count1+=30;
        console.log(number1);
        if(number1.count1>=80 && number1.count1<=130){
            history.push("./result3_1");
        }else if(number1.count1>=131 && number1.count1<=180){
            history.push("./result3_2");
        }else{
            history.push("./result3_3");
        }
        number1.count1-=number1.count1;
    };
        const question_title = "Q8. 인문계 고등학교 친구가 정보 과목을 얘기하며<br/> 프로그래밍이 재밌다고 한다.";
        const btn1 ="Hello World는 출력해봤니?ㅋ 코딩 별거 아니다~"; //10
        const btn2 = "너는... 그런거... 하지마라..."; //30
        // 80 - 130 : 131 - 180 : 181 - 230
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
export default Question3_8;
