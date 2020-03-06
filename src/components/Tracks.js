import React from 'react';
import { ListGroup } from 'react-bootstrap';
import {
  useRouteMatch,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Track from './Track';

const Tracks = ({tracks}) => {

  let match = useRouteMatch();

  return (
    <Switch>
        <Route path={`${match.url}/tracks/:uuid`}>
          <Track />
        </Route>
        <Route path={match.url}>
          <ListGroup>
            {tracks && tracks.map((track, index) => {
              return <ListGroup.Item
                key={index}>
                  <Link to={`${match.url}/tracks/${track.uuid}`}>{track.uuid} </Link>
                  - <small>created at {track.created_at}</small></ListGroup.Item>
            })}
          </ListGroup>
        </Route>
    </Switch>
    
  );
}

export default Tracks;
