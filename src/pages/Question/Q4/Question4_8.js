import React from "react";
import "../question.css";
import Button from "../../../component/Button";
import "./Question4_2";
import { str1} from "./Question4_2";
import { useHistory } from 'react-router-dom';

function Question4_8(){
    const history = useHistory();
    const onIncrease = () => {
        str1.mbti1+="Y"
        console.log(str1)
        if(str1.mbti1 === "GUSY"){ //SYGU
            history.push("./result4_1");
        }else if(str1.mbti1 === "GDSY"){ //SYGD
            history.push("./result4_2");
        }else if(str1.mbti1 === "AUSY"){//SYAU
            history.push("./result4_3");
        }else if(str1.mbti1 === "ADSY"){//SYAD
            history.push("./result4_4");
        }else if(str1.mbti1 === "GDSW"){//SWGD
            history.push("./result4_5");
        }else if(str1.mbti1 === "ADSW"){//SWAD
            history.push("./result4_6");
        }else if(str1.mbti1 === "GUSW"){//SWGU
            history.push("./result4_7");
        }else if(str1.mbti1 === "AUSW"){//SWAU
            history.push("./result4_8");
        }else if(str1.mbti1 === "GUJY"){ //JYGU
            history.push("./result4_9");
        }else if(str1.mbti1 === "AUJY"){ //JYAU
            history.push("./result4_10");
        }else if(str1.mbti1 === "AUJY"){ //JYAU
            history.push("./result4_11");
        }else if(str1.mbti1 === "ADJY"){ //JYAD
            history.push("./result4_12");
        }else if(str1.mbti1 === "GUJW"){ //JWGU
            history.push("./result4_13");
        }else if(str1.mbti1 === "AUJW"){ //JWAU
            history.push("./result4_14");
        }else if(str1.mbti1 === "GDJW"){ //JWGD
            history.push("./result4_15");
        }else if(str1.mbti1 === "ADJW"){ //JWAD
            history.push("./result4_16");
        }
        str1.mbti1-=str1.mbti1;
};
    const onDecrease = () => {
        str1.mbti1+="W"
        console.log(str1)
        if(str1.mbti1 === "GUSY"){ //SYGU
            history.push("./result4_1");
        }else if(str1.mbti1 === "GDSY"){ //SYGD
            history.push("./result4_2");
        }else if(str1.mbti1 === "AUSY"){//SYAU
            history.push("./result4_3");
        }else if(str1.mbti1 === "ADSY"){//SYAD
            history.push("./result4_4");
        }else if(str1.mbti1 === "GDSW"){//SWGD
            history.push("./result4_5");
        }else if(str1.mbti1 === "ADSW"){//SWAD
            history.push("./result4_6");
        }else if(str1.mbti1 === "GUSW"){//SWGU
            history.push("./result4_7");
        }else if(str1.mbti1 === "AUSW"){//SWAU
            history.push("./result4_8");
        }else if(str1.mbti1 === "GUJY"){ //JYGU
            history.push("./result4_9");
        }else if(str1.mbti1 === "AUJY"){ //JYAU
            history.push("./result4_10");
        }else if(str1.mbti1 === "AUJY"){ //JYAU
            history.push("./result4_11");
        }else if(str1.mbti1 === "ADJY"){ //JYAD
            history.push("./result4_12");
        }else if(str1.mbti1 === "GUJW"){ //JWGU
            history.push("./result4_13");
        }else if(str1.mbti1 === "AUJW"){ //JWAU
            history.push("./result4_14");
        }else if(str1.mbti1 === "GDJW"){ //JWGD
            history.push("./result4_15");
        }else if(str1.mbti1 === "ADJW"){ //JWAD
            history.push("./result4_16");
        }
        str1.mbti1-=str1.mbti1;
};
        const question_title = "Q8. 둘 중 당신의 선택은?";
        const btn1 =<>주말에 반 강제로 출근하고<br/> 경제적으로 여유로운 한달을 보낸다</> //Y
        const btn2 = <>토요일에 오후 3시까지 늦잠자고<br/> 일어나서 심적으로 여유로운 한달을 보낸다</> //W
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
export default Question4_8;
