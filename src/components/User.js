import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../api/user.service';
import TrackService from '../api/track.service';
import Tracks from './Tracks';

const User = () => {

  const [tracks, setTracks] = useState(null);
  const [artist, setArtist] = useState(null);
  let { uri } = useParams();

  useEffect(() => {
    UserService.artist(uri).then(artist => {
      setArtist(artist);
      TrackService.getTracks(artist.id).then(tracks => {
        setTracks(tracks);
      });
    });

  }, [uri]);

  return (
    <div>
      <h3>{artist && artist.username}</h3>
      <div>URI: {artist && artist.uri}</div>
      <div>Email: {artist && artist.email}</div>
      <br />
      {tracks &&
        <Tracks tracks={tracks}>
        </Tracks>
      }
    </div>
  );
};

export default User;
