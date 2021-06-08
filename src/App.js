import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./component/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import Account from "./pages/Account";
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

import Question4_1 from "./pages/Question/Q4/question4_1";
import Question4_2 from "./pages/Question/Q4/question4_2";
import Question4_3 from "./pages/Question/Q4/question4_3";
import Question4_4 from "./pages/Question/Q4/question4_4";
import Question4_5 from "./pages/Question/Q4/question4_5";

import Question5_1 from "./pages/Question/Q5/question5_1";
import Question5_2 from "./pages/Question/Q5/question5_2";
import Question5_3 from "./pages/Question/Q5/question5_3";
import Question5_4 from "./pages/Question/Q5/question5_4";
import Question5_5 from "./pages/Question/Q5/question5_5";
import Question5_6 from "./pages/Question/Q5/question5_6";
import Question5_7 from "./pages/Question/Q5/question5_7";
import Question5_8 from "./pages/Question/Q5/question5_8";
import Question5_9 from "./pages/Question/Q5/question5_9";

import Question6_1 from "./pages/Question/Q6/question6_1";
import Question6_2 from "./pages/Question/Q6/question6_2";
import Question6_3 from "./pages/Question/Q6/question6_3";
import Question6_4 from "./pages/Question/Q6/question6_4";
import Question6_5 from "./pages/Question/Q6/question6_5";
import Question6_6 from "./pages/Question/Q6/question6_6";

import Question7_1 from "./pages/Question/Q7/question7_1";
import Question7_2 from "./pages/Question/Q7/question7_2";
import Question7_3 from "./pages/Question/Q7/question7_3";
import Question7_4 from "./pages/Question/Q7/question7_4";
import Question7_5 from "./pages/Question/Q7/question7_5";
import Question7_6 from "./pages/Question/Q7/question7_6";

import Question8_1 from "./pages/Question/Q8/question8_1";
import Question8_2 from "./pages/Question/Q8/question8_2";
import Question8_3 from "./pages/Question/Q8/question8_3";
import Question8_4 from "./pages/Question/Q8/question8_4";
import Question8_5 from "./pages/Question/Q8/question8_5";
import Question8_6 from "./pages/Question/Q8/question8_6";

import Question9_1 from "./pages/Question/Q9/question9_1";
import Question9_2 from "./pages/Question/Q9/question9_2";
import Question9_3 from "./pages/Question/Q9/question9_3";
import Question9_4 from "./pages/Question/Q9/question9_4";
import Question9_5 from "./pages/Question/Q9/question9_5";
import Question9_6 from "./pages/Question/Q9/question9_6";


import Collect from "./pages/Collect/collect";
import Result from "./pages/Result/result";
import Developer_intro from "./pages/Developer_intro/developer_intro";

import Axios from "axios";
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
                    <Route path="/result" component={Result} />
                    <Route path="/account" component={Account} />
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

                    <Route path="/question4_1" component={Question4_1} />
                    <Route path="/question4_2" component={Question4_2} />
                    <Route path="/question4_3" component={Question4_3} />
                    <Route path="/question4_4" component={Question4_4} />
                    <Route path="/question4_5" component={Question4_5} />

                    <Route path="/question5_1" component={Question5_1} />
                    <Route path="/question5_2" component={Question5_2} />
                    <Route path="/question5_3" component={Question5_3} />
                    <Route path="/question5_4" component={Question5_4} />
                    <Route path="/question5_5" component={Question5_5} />
                    <Route path="/question5_6" component={Question5_6} />
                    <Route path="/question5_7" component={Question5_7} />
                    <Route path="/question5_8" component={Question5_8} />
                    <Route path="/question5_9" component={Question5_9} />

                    <Route path="/question6_1" component={Question6_1} />
                    <Route path="/question6_2" component={Question6_2} />
                    <Route path="/question6_3" component={Question6_3} />
                    <Route path="/question6_4" component={Question6_4} />
                    <Route path="/question6_5" component={Question6_5} />
                    <Route path="/question6_6" component={Question6_6} />

                    <Route path="/question7_1" component={Question7_1} />
                    <Route path="/question7_2" component={Question7_2} />
                    <Route path="/question7_3" component={Question7_3} />
                    <Route path="/question7_4" component={Question7_4} />
                    <Route path="/question7_5" component={Question7_5} />
                    <Route path="/question7_6" component={Question7_6} />

                    <Route path="/question8_1" component={Question8_1} />
                    <Route path="/question8_2" component={Question8_2} />
                    <Route path="/question8_3" component={Question8_3} />
                    <Route path="/question8_4" component={Question8_4} />
                    <Route path="/question8_5" component={Question8_5} />
                    <Route path="/question8_6" component={Question8_6} />

                    <Route path="/question9_1" component={Question9_1} />
                    <Route path="/question9_2" component={Question9_2} />
                    <Route path="/question9_3" component={Question9_3} />
                    <Route path="/question9_4" component={Question9_4} />
                    <Route path="/question9_5" component={Question9_5} />
                    <Route path="/question9_6" component={Question9_6} />


                    <Route path="/result" component={Result} />
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

export default App;
