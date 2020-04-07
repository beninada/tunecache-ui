import React from "react";
import { useRouteMatch, Switch, Route, Link } from "react-router-dom";
import Track from "./Track";

const Tracks = ({ tracks }) => {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.url}/tracks/:uuid`}>
        <Track />
      </Route>
      <Route path={match.url}>
        <h4>Tracks</h4>
        <ul>
          {tracks &&
            tracks.map((track, index) => {
              return (
                <li key={index}>
                  <Link to={`${match.url}/tracks/${track.uuid}`}>
                    {track.uuid}
                  </Link>
                </li>
              );
            })}
        </ul>
      </Route>
    </Switch>
  );
};

export default Tracks;
