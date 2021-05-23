import React from "react";
import "./App.css";
import NavBar from "./component/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Account from "./pages/Account";
import PassChange from "./pages/PassChange";
import QuitAccount from "./pages/QuitAccount";
import SignUp from "./pages/SignUp";

import Question from "./pages/Question/question";
import Collect from "./pages/Collect/collect";
import Result from "./pages/Result/result";
import Developer_intro from "./pages/Developer_intro/developer_intro";

// 여기서 페이지 이동을 담당
function App() {
    return (
        <>
            {/* <Login/> */}
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/account" component={Account} />
                    <Route path="/pass_change" component={PassChange} />
                    <Route path="/quit_account" component={QuitAccount} />

                    <Route path="/question" component={Question} />
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
