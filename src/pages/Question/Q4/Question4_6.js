import React from "react";
import "../question.css";
import Button from "../../../component/Button";
// import { Link } from "react-router-dom"; 
import { useHistory } from 'react-router-dom';

function Question4_6(){
    const history = useHistory();
    const onIncrease = () => {
        history.push("./Question4_7");
    };
    const onDecrease = () => {
        history.push("./Question4_7");
    };
        const question_title = 'Q6. 나는 "꼰대"라는 소리를 들어본 적이 있다';
        const btn1 ="YES"; 
        const btn2 = "NO"; 
        
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="75" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        {/* <Link to="/Qusetion4_7"> */}
                        <Button
                        onClick={() =>onIncrease() }
                        >
                            {btn1}
                        </Button>
                        {/* </Link> */}
                        <br />
                        {/* <Link to="/Qusetion4_7"> */}
                        <Button
                        onClick={() =>onDecrease()}
                        >
                           {btn2}
                        </Button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        );
    };
export default Question4_6;
