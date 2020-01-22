


import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import TrackService from '../api/track.service';

const Tracks = () => {

  const id = useSelector(
    (state) => state.loggedInUser
  );

  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    TrackService.getTracks(id).then(tracks => {
      setTracks(tracks);
    });

  }, [id]);

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
