import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom";
import "./Question7_1";
import { number1, number2, number3, number4 } from "./Question7_1";

function Question7_3() {
    const onPlus1 = () => {
        number2.count2++;
        console.log(number2);
    };
    const onPlus2 = () => {
        number4.count4++;
        console.log(number4);
    };
    const onPlus3 = () => {
        number1.count1++;
        console.log(number1);
    };
    const onPlus4 = () => {
        number3.count3++;
        console.log(number3);
    };
    const question_title = (
        <>
            Q3. 다른 사람이 만들어 높은 서비스를 사용하면서
            <br /> 어떤 부분을 생각하나요?
        </>
    );
    const btn1 = (
        <>
            프로그램을 볼 때 기능을 보려다가 <br />
            메뉴의 색깔이 신경쓰인다
        </>
    ); //F
    const btn2 = "버튼 크기가 뭐가 이상하다는건지 잘 모르겠다"; //BF
    const btn3 = (
        <>
            필요한 사이트의 회원가입을 하다가 오류가 났다. <br /> 내가
            고쳐버리고 싶다
        </>
    ); //B
    const btn4 = (
        <>
            친구에게 웃긴 썰을 보내려 url을 복사했는데 <br /> 너무 긴 url이
            신경쓰여서 단축해서 보내버렸다
        </>
    ); //FB
    return (
        <div className="Question">
            <div className="container">
                <progress id="progressbar" value="51" max="100"></progress>
                <div
                    className="question_title"
                    // html 형태로 렌더링 허용
                >
                    {question_title}
                </div>

                <div className="buttons">
                    <Link to="./Question7_4" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onPlus1()}>{btn1}</Button>
                    </Link>
                    <br />
                    <Link to="./Question7_4" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onPlus2()}>{btn2}</Button>
                    </Link>
                    <br />
                    <Link to="./Question7_4" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onPlus3()}>{btn3}</Button>
                    </Link>
                    <br />
                    <Link to="./Question7_4" style={{ textDecoration: "none" }}>
                        <Button onClick={() => onPlus4()}>{btn4}</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Question7_3;
