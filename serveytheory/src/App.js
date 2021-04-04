import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/'/>
      </Switch>
      </Router>
    </>
  );
}

export default App;
