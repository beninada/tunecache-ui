import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Users from '../components/Users';
import Signup from '../components/Signup';
import Login from '../components/Login';
import TrackUpload from '../components/TrackUpload';
import Search from '../components/Search';
import './App.css';
// import logo from '../logo.svg';
import JwtService from '../api/jwt.service';
import UserService from '../api/user.service';
import { setLoggedInUser } from '../store/loggedInUser.slice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (JwtService.getToken()) {
      UserService.me().then((loggedInUser) => {
        dispatch(setLoggedInUser(loggedInUser));
      });
    }
  }, [ dispatch ]);

  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/upload">
          <TrackUpload />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
