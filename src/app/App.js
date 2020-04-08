import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import User from "../pages/User";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import TrackDetail from "../pages/TrackDetail";
import TrackUpload from "../pages/TrackUpload";
import Search from "../pages/Search";
import PlaylistDetail from "../pages/PlaylistDetail";
import CreatePlaylist from "../pages/CreatePlaylist";
import "./App.css";
// import logo from '../logo.svg';
import JwtService from "../api/jwt.service";
import UserService from "../api/user.service";
import { setLoggedInUser } from "../store/loggedInUser.slice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (JwtService.getToken()) {
      UserService.me().then((loggedInUser) => {
        dispatch(setLoggedInUser(loggedInUser));
      });
    }
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
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
        <Route path="/tracks/:uuid">
          <TrackDetail />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/playlists/create">
          <CreatePlaylist />
        </Route>
        <Route path="/playlists/:id">
          <PlaylistDetail />
        </Route>
        <Route path="/users/:uri">
          <User />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
