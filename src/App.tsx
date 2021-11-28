import React from 'react';
import './App.css';
import LoginUser from './LoginUser';
import RegisterUser from './RegisterUser';
import {BrouserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/LoginUser' component={LoginUser}></Route>
      <Route path='/RegisterUser' component={RegisterUser}></Route>
      <Route path= '/Logined' component={Logined}></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
const Home = ()=>{
  <header className="app-header">
  <img src="https://www.kolaybi.com/images/base/kolaybi_logotype_light.png" alt="logo" width="300" />
  <span className="app-title">KolayBi FE Starter Pack</span>
  <Link to='/LoginUser'>
    <button>Login</button>
  </Link>
  <Link to='/RegisterUser'>
    <button>Register</button>
  </Link>
</header>
}