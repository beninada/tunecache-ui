import React, { useState, useEffect } from 'react';
import {
  useRouteMatch,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import UserService from '../api/user.service';
import User from './User';

function Users() {
  let match = useRouteMatch();

  const [artists, setArtists] = useState(null);

  useEffect(() => {
    UserService.artists().then(res => {
      setArtists(res.data);
    });
  }, []);

  return (
    <Switch>
      <Route path={`${match.path}/:uri`}>
        <User/>
      </Route>
      <Route path={match.path}>
        <h2>Artists</h2>
        <ul>
          {artists && artists.map(artist => {
            return <li key={artist.id}>
              <Link to={`${match.url}/${artist.uri}`}>{artist.uri}</Link>
            </li>
          })}
        </ul>
      </Route>
    </Switch>
  );
}

export default Users;
