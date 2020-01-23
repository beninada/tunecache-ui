


import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Tracks = ({tracks}) => {

  return (
    <ListGroup>
      {tracks && tracks.map((track, index) => {
        return <ListGroup.Item
          key={index}>{track.uuid} - <small>created at {track.created_at}</small></ListGroup.Item>
      })}
    </ListGroup>
  );
}

export default Tracks;
