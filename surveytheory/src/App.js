import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./component/NavBar";
import NavBar1 from "./component/NavBar1";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Login, { user_id } from "./pages/Login/login";
import PassChange from "./pages/PassChange/passChange";
import QuitAccount from "./pages/QuitAccount/quitAccount";
import SignUp from "./pages/SignUp/signup";

import Q1_1 from "./pages/Question/Q1/Question1_1";
import Q1_2 from "./pages/Question/Q1/Question1_2";
import Q1_3 from "./pages/Question/Q1/Question1_3";
import Q1_4 from "./pages/Question/Q1/Question1_4";
import Q1_5 from "./pages/Question/Q1/Question1_5";
import Q1_6 from "./pages/Question/Q1/Question1_6";

import Q2_1 from "./pages/Question/Q2/Question2_1";
import Q2_2 from "./pages/Question/Q2/Question2_2";
import Q2_3 from "./pages/Question/Q2/Question2_3";
import Q2_4 from "./pages/Question/Q2/Question2_4";
import Q2_5 from "./pages/Question/Q2/Question2_5";
import Q2_6 from "./pages/Question/Q2/Question2_6";
import Q2_7 from "./pages/Question/Q2/Question2_7";

import Q3_1 from "./pages/Question/Q3/Question3_1";
import Q3_2 from "./pages/Question/Q3/Question3_2";
import Q3_3 from "./pages/Question/Q3/Question3_3";
import Q3_4 from "./pages/Question/Q3/Question3_4";
import Q3_5 from "./pages/Question/Q3/Question3_5";
import Q3_6 from "./pages/Question/Q3/Question3_6";
import Q3_7 from "./pages/Question/Q3/Question3_7";
import Q3_8 from "./pages/Question/Q3/Question3_8";

import Q4_1 from "./pages/Question/Q4/Question4_1";
import Q4_2 from "./pages/Question/Q4/Question4_2";
import Q4_3 from "./pages/Question/Q4/Question4_3";
import Q4_4 from "./pages/Question/Q4/Question4_4";
import Q4_5 from "./pages/Question/Q4/Question4_5";
import Q4_6 from "./pages/Question/Q4/Question4_6";
import Q4_7 from "./pages/Question/Q4/Question4_7";
import Q4_8 from "./pages/Question/Q4/Question4_8";

import Q5_1 from "./pages/Question/Q5/Question5_1";
import Q5_2 from "./pages/Question/Q5/Question5_2";
import Q5_3 from "./pages/Question/Q5/Question5_3";
import Q5_4 from "./pages/Question/Q5/Question5_4";
import Q5_5 from "./pages/Question/Q5/Question5_5";
import Q5_6 from "./pages/Question/Q5/Question5_6";
import Q5_7 from "./pages/Question/Q5/Question5_7";
import Q5_8 from "./pages/Question/Q5/Question5_8";
import Q5_9 from "./pages/Question/Q5/Question5_9";

import Q6_1 from "./pages/Question/Q6/Question6_1";
import Q6_2 from "./pages/Question/Q6/Question6_2";
import Q6_3 from "./pages/Question/Q6/Question6_3";
import Q6_4 from "./pages/Question/Q6/Question6_4";
import Q6_5 from "./pages/Question/Q6/Question6_5";
import Q6_6 from "./pages/Question/Q6/Question6_6";

import Q7_1 from "./pages/Question/Q7/Question7_1";
import Q7_2 from "./pages/Question/Q7/Question7_2";
import Q7_3 from "./pages/Question/Q7/Question7_3";
import Q7_4 from "./pages/Question/Q7/Question7_4";
import Q7_5 from "./pages/Question/Q7/Question7_5";
import Q7_6 from "./pages/Question/Q7/Question7_6";

import Q8_1 from "./pages/Question/Q8/Question8_1";
import Q8_2 from "./pages/Question/Q8/Question8_2";
import Q8_3 from "./pages/Question/Q8/Question8_3";
import Q8_4 from "./pages/Question/Q8/Question8_4";
import Q8_5 from "./pages/Question/Q8/Question8_5";
import Q8_6 from "./pages/Question/Q8/Question8_6";

import Q9_1 from "./pages/Question/Q9/Question9_1";
import Q9_2 from "./pages/Question/Q9/Question9_2";
import Q9_3 from "./pages/Question/Q9/Question9_3";
import Q9_4 from "./pages/Question/Q9/Question9_4";
import Q9_5 from "./pages/Question/Q9/Question9_5";
import Q9_6 from "./pages/Question/Q9/Question9_6";

import R1_1 from "./pages/Result/Result1/result1_1";
import R1_2 from "./pages/Result/Result1/result1_2";

import R2_1 from "./pages/Result/Result2/result2_1";
import R2_2 from "./pages/Result/Result2/result2_2";
import R2_3 from "./pages/Result/Result2/result2_3";

import R3_1 from "./pages/Result/Result3/result3_1";
import R3_2 from "./pages/Result/Result3/result3_2";
import R3_3 from "./pages/Result/Result3/result3_3";

import R4_1 from "./pages/Result/Result4/result4_1";
import R4_2 from "./pages/Result/Result4/result4_2";
import R4_3 from "./pages/Result/Result4/result4_3";
import R4_4 from "./pages/Result/Result4/result4_4";
import R4_5 from "./pages/Result/Result4/result4_5";
import R4_6 from "./pages/Result/Result4/result4_6";
import R4_7 from "./pages/Result/Result4/result4_7";
import R4_8 from "./pages/Result/Result4/result4_8";
import R4_9 from "./pages/Result/Result4/result4_9";
import R4_10 from "./pages/Result/Result4/result4_10";
import R4_11 from "./pages/Result/Result4/result4_11";
import R4_12 from "./pages/Result/Result4/result4_12";
import R4_13 from "./pages/Result/Result4/result4_13";
import R4_14 from "./pages/Result/Result4/result4_14";
import R4_15 from "./pages/Result/Result4/result4_15";
import R4_16 from "./pages/Result/Result4/result4_16";

import R5_1 from "./pages/Result/Result5/result5_1";
import R5_2 from "./pages/Result/Result5/result5_2";
import R5_3 from "./pages/Result/Result5/result5_3";

import R6_1 from "./pages/Result/Result6/result6_1";
import R6_2 from "./pages/Result/Result6/result6_2";
import R6_3 from "./pages/Result/Result6/result6_3";

import R7_1 from "./pages/Result/Result7/result7_1";
import R7_2 from "./pages/Result/Result7/result7_2";
import R7_3 from "./pages/Result/Result7/result7_3";
import R7_4 from "./pages/Result/Result7/result7_4";

import R8_1 from "./pages/Result/Result8/result8_1";
import R8_2 from "./pages/Result/Result8/result8_2";

import R9_1 from "./pages/Result/Result9/result9_1";
import R9_2 from "./pages/Result/Result9/result9_2";
import R9_3 from "./pages/Result/Result9/result9_3";
import R9_4 from "./pages/Result/Result9/result9_4";

import Collect from "./pages/Collect/collect";
import Developer_intro from "./pages/Developer_intro/developer_intro";

import customAxios from "./customAxios";

// 여기서 페이지 이동을 담당
function App() {
    // IP주소 변수 선언
    const [ip, setIp] = useState("");

    // IP주소 값을 설정합니다.
    function callback(data) {
        setIp(data);
    }

    // 첫번째 렌더링을 다 마친 후 실행합니다.
    useEffect(() => {
        // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
        customAxios("/ip", callback);
    }, []);

    if (user_id.userid == "novalue") {
        return (
            <>
                {/* <div className="App">
                        <header className="App-header">
                        이 기기의 IP주소는 {ip}입니다.
                        </header>
                    </div> */}
                <Router>
                    <NavBar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/signup" component={SignUp} />

                        <Route path="/pass_change" component={PassChange} />
                        <Route path="/quit_account" component={QuitAccount} />

                        <Route path="/Question1_1" component={Q1_1} />
                        <Route path="/Question1_2" component={Q1_2} />
                        <Route path="/Question1_3" component={Q1_3} />
                        <Route path="/Question1_4" component={Q1_4} />
                        <Route path="/Question1_5" component={Q1_5} />
                        <Route path="/Question1_6" component={Q1_6} />

                        <Route path="/Question2_1" component={Q2_1} />
                        <Route path="/Question2_2" component={Q2_2} />
                        <Route path="/Question2_3" component={Q2_3} />
                        <Route path="/Question2_4" component={Q2_4} />
                        <Route path="/Question2_5" component={Q2_5} />
                        <Route path="/Question2_6" component={Q2_6} />
                        <Route path="/Question2_7" component={Q2_7} />

                        <Route path="/Question3_1" component={Q3_1} />
                        <Route path="/Question3_2" component={Q3_2} />
                        <Route path="/Question3_3" component={Q3_3} />
                        <Route path="/Question3_4" component={Q3_4} />
                        <Route path="/Question3_5" component={Q3_5} />
                        <Route path="/Question3_6" component={Q3_6} />
                        <Route path="/Question3_7" component={Q3_7} />
                        <Route path="/Question3_8" component={Q3_8} />

                        <Route path="/Question4_1" component={Q4_1} />
                        <Route path="/Question4_2" component={Q4_2} />
                        <Route path="/Question4_3" component={Q4_3} />
                        <Route path="/Question4_4" component={Q4_4} />
                        <Route path="/Question4_5" component={Q4_5} />
                        <Route path="/Question4_6" component={Q4_6} />
                        <Route path="/Question4_7" component={Q4_7} />
                        <Route path="/Question4_8" component={Q4_8} />

                        <Route path="/Question5_1" component={Q5_1} />
                        <Route path="/Question5_2" component={Q5_2} />
                        <Route path="/Question5_3" component={Q5_3} />
                        <Route path="/Question5_4" component={Q5_4} />
                        <Route path="/Question5_5" component={Q5_5} />
                        <Route path="/Question5_6" component={Q5_6} />
                        <Route path="/Question5_7" component={Q5_7} />
                        <Route path="/Question5_8" component={Q5_8} />
                        <Route path="/Question5_9" component={Q5_9} />

                        <Route path="/Question6_1" component={Q6_1} />
                        <Route path="/Question6_2" component={Q6_2} />
                        <Route path="/Question6_3" component={Q6_3} />
                        <Route path="/Question6_4" component={Q6_4} />
                        <Route path="/Question6_5" component={Q6_5} />
                        <Route path="/Question6_6" component={Q6_6} />

                        <Route path="/Question7_1" component={Q7_1} />
                        <Route path="/Question7_2" component={Q7_2} />
                        <Route path="/Question7_3" component={Q7_3} />
                        <Route path="/Question7_4" component={Q7_4} />
                        <Route path="/Question7_5" component={Q7_5} />
                        <Route path="/Question7_6" component={Q7_6} />

                        <Route path="/Question8_1" component={Q8_1} />
                        <Route path="/Question8_2" component={Q8_2} />
                        <Route path="/Question8_3" component={Q8_3} />
                        <Route path="/Question8_4" component={Q8_4} />
                        <Route path="/Question8_5" component={Q8_5} />
                        <Route path="/Question8_6" component={Q8_6} />

                        <Route path="/Question9_1" component={Q9_1} />
                        <Route path="/Question9_2" component={Q9_2} />
                        <Route path="/Question9_3" component={Q9_3} />
                        <Route path="/Question9_4" component={Q9_4} />
                        <Route path="/Question9_5" component={Q9_5} />
                        <Route path="/Question9_6" component={Q9_6} />

                        <Route path="/result1_1" component={R1_1} />
                        <Route path="/result1_2" component={R1_2} />

                        <Route path="/result2_1" component={R2_1} />
                        <Route path="/result2_2" component={R2_2} />
                        <Route path="/result2_3" component={R2_3} />

                        <Route path="/result3_1" component={R3_1} />
                        <Route path="/result3_2" component={R3_2} />
                        <Route path="/result3_3" component={R3_3} />

                        <Route path="/result4_1" component={R4_1} />
                        <Route path="/result4_2" component={R4_2} />
                        <Route path="/result4_3" component={R4_3} />
                        <Route path="/result4_4" component={R4_4} />
                        <Route path="/result4_5" component={R4_5} />
                        <Route path="/result4_6" component={R4_6} />
                        <Route path="/result4_7" component={R4_7} />
                        <Route path="/result4_8" component={R4_8} />
                        <Route path="/result4_9" component={R4_9} />
                        <Route path="/result4_10" component={R4_10} />
                        <Route path="/result4_11" component={R4_11} />
                        <Route path="/result4_12" component={R4_12} />
                        <Route path="/result4_13" component={R4_13} />
                        <Route path="/result4_14" component={R4_14} />
                        <Route path="/result4_15" component={R4_15} />
                        <Route path="/result4_16" component={R4_16} />

                        <Route path="/result5_1" component={R5_1} />
                        <Route path="/result5_2" component={R5_2} />
                        <Route path="/result5_3" component={R5_3} />

                        <Route path="/result6_1" component={R6_1} />
                        <Route path="/result6_2" component={R6_2} />
                        <Route path="/result6_3" component={R6_3} />

                        <Route path="/result7_1" component={R7_1} />
                        <Route path="/result7_2" component={R7_2} />
                        <Route path="/result7_3" component={R7_3} />
                        <Route path="/result7_4" component={R7_4} />

                        <Route path="/result8_1" component={R8_1} />
                        <Route path="/result8_2" component={R8_2} />

                        <Route path="/result9_1" component={R9_1} />
                        <Route path="/result9_2" component={R9_2} />
                        <Route path="/result9_3" component={R9_3} />
                        <Route path="/result9_4" component={R9_4} />

                        <Route path="/collect" component={Collect} />
                        <Route
                            path="/developer_intro"
                            component={Developer_intro}
                        />
                    </Switch>
                </Router>
            </>
        );
    } else {
        return (
            <>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/signup" component={SignUp} />

                        <Route path="/pass_change" component={PassChange} />
                        <Route path="/quit_account" component={QuitAccount} />

                        <Route path="/Question1_1" component={Q1_1} />
                        <Route path="/Question1_2" component={Q1_2} />
                        <Route path="/Question1_3" component={Q1_3} />
                        <Route path="/Question1_4" component={Q1_4} />
                        <Route path="/Question1_5" component={Q1_5} />
                        <Route path="/Question1_6" component={Q1_6} />

                        <Route path="/Question2_1" component={Q2_1} />
                        <Route path="/Question2_2" component={Q2_2} />
                        <Route path="/Question2_3" component={Q2_3} />
                        <Route path="/Question2_4" component={Q2_4} />
                        <Route path="/Question2_5" component={Q2_5} />
                        <Route path="/Question2_6" component={Q2_6} />
                        <Route path="/Question2_7" component={Q2_7} />

                        <Route path="/Question3_1" component={Q3_1} />
                        <Route path="/Question3_2" component={Q3_2} />
                        <Route path="/Question3_3" component={Q3_3} />
                        <Route path="/Question3_4" component={Q3_4} />
                        <Route path="/Question3_5" component={Q3_5} />
                        <Route path="/Question3_6" component={Q3_6} />
                        <Route path="/Question3_7" component={Q3_7} />
                        <Route path="/Question3_8" component={Q3_8} />

                        <Route path="/Question4_1" component={Q4_1} />
                        <Route path="/Question4_2" component={Q4_2} />
                        <Route path="/Question4_3" component={Q4_3} />
                        <Route path="/Question4_4" component={Q4_4} />
                        <Route path="/Question4_5" component={Q4_5} />
                        <Route path="/Question4_6" component={Q4_6} />
                        <Route path="/Question4_7" component={Q4_7} />
                        <Route path="/Question4_8" component={Q4_8} />

                        <Route path="/Question5_1" component={Q5_1} />
                        <Route path="/Question5_2" component={Q5_2} />
                        <Route path="/Question5_3" component={Q5_3} />
                        <Route path="/Question5_4" component={Q5_4} />
                        <Route path="/Question5_5" component={Q5_5} />
                        <Route path="/Question5_6" component={Q5_6} />
                        <Route path="/Question5_7" component={Q5_7} />
                        <Route path="/Question5_8" component={Q5_8} />
                        <Route path="/Question5_9" component={Q5_9} />

                        <Route path="/Question6_1" component={Q6_1} />
                        <Route path="/Question6_2" component={Q6_2} />
                        <Route path="/Question6_3" component={Q6_3} />
                        <Route path="/Question6_4" component={Q6_4} />
                        <Route path="/Question6_5" component={Q6_5} />
                        <Route path="/Question6_6" component={Q6_6} />

                        <Route path="/Question7_1" component={Q7_1} />
                        <Route path="/Question7_2" component={Q7_2} />
                        <Route path="/Question7_3" component={Q7_3} />
                        <Route path="/Question7_4" component={Q7_4} />
                        <Route path="/Question7_5" component={Q7_5} />
                        <Route path="/Question7_6" component={Q7_6} />

                        <Route path="/Question8_1" component={Q8_1} />
                        <Route path="/Question8_2" component={Q8_2} />
                        <Route path="/Question8_3" component={Q8_3} />
                        <Route path="/Question8_4" component={Q8_4} />
                        <Route path="/Question8_5" component={Q8_5} />
                        <Route path="/Question8_6" component={Q8_6} />

                        <Route path="/Question9_1" component={Q9_1} />
                        <Route path="/Question9_2" component={Q9_2} />
                        <Route path="/Question9_3" component={Q9_3} />
                        <Route path="/Question9_4" component={Q9_4} />
                        <Route path="/Question9_5" component={Q9_5} />
                        <Route path="/Question9_6" component={Q9_6} />

                        <Route path="/result1_1" component={R1_1} />
                        <Route path="/result1_2" component={R1_2} />

                        <Route path="/result2_1" component={R2_1} />
                        <Route path="/result2_2" component={R2_2} />
                        <Route path="/result2_3" component={R2_3} />

                        <Route path="/result3_1" component={R3_1} />
                        <Route path="/result3_2" component={R3_2} />
                        <Route path="/result3_3" component={R3_3} />

                        <Route path="/result4_1" component={R4_1} />
                        <Route path="/result4_2" component={R4_2} />
                        <Route path="/result4_3" component={R4_3} />
                        <Route path="/result4_4" component={R4_4} />
                        <Route path="/result4_5" component={R4_5} />
                        <Route path="/result4_6" component={R4_6} />
                        <Route path="/result4_7" component={R4_7} />
                        <Route path="/result4_8" component={R4_8} />
                        <Route path="/result4_9" component={R4_9} />
                        <Route path="/result4_10" component={R4_10} />
                        <Route path="/result4_11" component={R4_11} />
                        <Route path="/result4_12" component={R4_12} />
                        <Route path="/result4_13" component={R4_13} />
                        <Route path="/result4_14" component={R4_14} />
                        <Route path="/result4_15" component={R4_15} />
                        <Route path="/result4_16" component={R4_16} />

                        <Route path="/result5_1" component={R5_1} />
                        <Route path="/result5_2" component={R5_2} />
                        <Route path="/result5_3" component={R5_3} />

                        <Route path="/result6_1" component={R6_1} />
                        <Route path="/result6_2" component={R6_2} />
                        <Route path="/result6_3" component={R6_3} />

                        <Route path="/result7_1" component={R7_1} />
                        <Route path="/result7_2" component={R7_2} />
                        <Route path="/result7_3" component={R7_3} />
                        <Route path="/result7_4" component={R7_4} />

                        <Route path="/result8_1" component={R8_1} />
                        <Route path="/result8_2" component={R8_2} />

                        <Route path="/result9_1" component={R9_1} />
                        <Route path="/result9_2" component={R9_2} />
                        <Route path="/result9_3" component={R9_3} />
                        <Route path="/result9_4" component={R9_4} />

                        <Route path="/collect" component={Collect} />
                        <Route
                            path="/developer_intro"
                            component={Developer_intro}
                        />
                    </Switch>
                </Router>
            </>
        );
    }
}

export default App;