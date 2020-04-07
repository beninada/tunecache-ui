import React, { useState, useEffect } from "react";
import { useRouteMatch, Switch, Route, Link } from "react-router-dom";
import UserService from "../api/user.service";
import User from "./User";
import Layout from "./Layout";

const Users = () => {
  let match = useRouteMatch();

  const [artists, setArtists] = useState(null);

  useEffect(() => {
    UserService.artists().then((artists) => {
      setArtists(artists);
    });
  }, []);

  return (
    <Layout>
      <Switch>
        <Route path={`${match.path}/:uri`}>
          <User />
        </Route>
        <Route path={match.path}>
          <h2>Artists</h2>
          <ul>
            {artists &&
              artists.map((artist) => {
                return (
                  <li key={artist.id}>
                    <Link to={`${match.url}/${artist.uri}`}>{artist.uri}</Link>
                  </li>
                );
              })}
          </ul>
        </Route>
      </Switch>
    </Layout>
  );
};

export default Users;
