


import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Playlists = ({playlists}) => {

  return (
    <ListGroup>
      {playlists && playlists.map((playlist, index) => {
        return <ListGroup.Item
          key={index}>{playlist.title} - <small>created at {playlist.created_at}</small></ListGroup.Item>
      })}
    </ListGroup>
  );
}

export default Playlists;
