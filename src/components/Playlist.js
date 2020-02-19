import React, { useState, useEffect } from 'react';
import {
  useParams
} from 'react-router-dom';
import PlaylistService from '../api/playlist.service';
import Layout from './Layout';

const Playlist = () => {

  const [playlist, setPlaylist] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    PlaylistService.getPlaylist(id).then(playlist => {
      setPlaylist(playlist);
    });

  }, [id]);

  return (
    <Layout>
      {playlist &&
            <div>
              <h3>{playlist.title}</h3>
              <p>{playlist.description}</p>
            </div>
          }
    </Layout>
  );
};

export default Playlist;
