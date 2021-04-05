import React from 'react';
import './App.css';
import NavBar from './component/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login_Logout from './pages/Login_Logout';
import Result from './pages/Result';
import Account from './pages/Account';
import PassChange from './pages/PassChange';
import QuitAccount from './pages/QuitAccount';


// 여기서 페이지 이동을 담당
function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
      <Route path='/' exact component={Home} />
          <Route path='/login_logout' component={Login_Logout} />
          <Route path='/result' component={Result} />
          <Route path='/account' component={Account} />
          <Route path='/pass_change' component={PassChange} />
          <Route path='/quit_account' component={QuitAccount} />
      </Switch>
      </Router>
    </>
  );
}

export default App;