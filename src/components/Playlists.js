import React from "react";
import { useRouteMatch, Switch, Route, Link } from "react-router-dom";
import Playlist from "./Playlist";

const Playlists = ({ playlists }) => {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/:id`}>
        <Playlist />
      </Route>
      <Route path={match.path}>
        <h4>Playlists</h4>
        <ul>
          {playlists &&
            playlists.map((playlist, index) => {
              return (
                <li key={playlist.id}>
                  <Link to={`../playlists/${playlist.id}`}>
                    {playlist.title}
                  </Link>
                </li>
              );
            })}
        </ul>
      </Route>
    </Switch>
  );
};

export default Playlists;
