import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./component/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import Account from "./pages/Account";
import PassChange from "./pages/PassChange";
import QuitAccount from "./pages/QuitAccount";
import SignUp from "./pages/SignUp/signup";

import Question2 from "./pages/Question/question_2";
import Question3 from "./pages/Question/question_3";
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

                    <Route path="/question2" component={Question2} />
                    <Route path="/question3" component={Question3} />
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
