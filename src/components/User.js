import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../api/user.service';
import TrackService from '../api/track.service';
import PlaylistService from '../api/playlist.service';
import Tracks from './Tracks';
import Playlists from './Playlists';

const User = () => {

  const [tracks, setTracks] = useState(null);
  const [artist, setArtist] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  let { uri } = useParams();

  useEffect(() => {
    UserService.artist(uri).then(artist => {
      setArtist(artist);
    });
    TrackService.getTracks(artist.id).then(tracks => {
      setTracks(tracks);
    });
    PlaylistService.getPlaylists(artist.id).then(playlists => {
      setPlaylists(playlists);
    });
  }, [uri]);

  return (
    <div>
      <h3>{artist && artist.username}</h3>
      <div>URI: {artist && artist.uri}</div>
      <div>Email: {artist && artist.email}</div>
      {tracks &&
        <div className="mt-4">
          <h4>Tracks</h4>
          <Tracks tracks={tracks}>
          </Tracks>
        </div>
      }
      {playlists &&
        <div className="mt-4">
          <Playlists playlists={playlists}>
          </Playlists>
        </div>
      }
    </div>
  );
};

export default User;
