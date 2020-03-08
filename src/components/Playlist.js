import React, { useState, useEffect } from 'react';
import {
  useParams
} from 'react-router-dom';
import PlaylistService from '../api/playlist.service';
import Layout from './Layout';
import Tracks from './Tracks';

const Playlist = () => {

  const [playlist, setPlaylist] = useState(null);
  const [tracks, setTracks] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    PlaylistService.getPlaylist(id).then(playlist => {
      setPlaylist(playlist);
    });
    PlaylistService.getPlaylistTracks(id).then(tracks => {
      setTracks(tracks);
    });
  }, [id]);

  return (
    <div>
      {playlist &&
        <div>
          <h3>{playlist.title}</h3>
          <p>{playlist.description}</p>
        </div>
      }
      {tracks &&
        <Tracks tracks={tracks}>
        </Tracks>
      }
    </div>
  );
};

export default Playlist;
