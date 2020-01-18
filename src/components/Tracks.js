


import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import TrackService from '../api/track.service';

const Tracks = () => {

  const { id } = useSelector(
    (state) => state.loggedInUser
  );

  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    TrackService.getTracks({ 'id': id }).then(tracks => {
      setTracks(tracks);
    });

  }, []);

  return (
    <div>
        {tracks && tracks.map(track => {
          return <Card>
            <Card.Body>
              <Card.Title>{track.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{track.bpm}</Card.Subtitle>
              <Card.Text>
                {track.uuid} - created at {track.created_at}.
              </Card.Text>
              <Card.Link href="#">{track.title}</Card.Link>
            </Card.Body>

          </Card>
        })}
    </div>
  );
}

export default Tracks;
