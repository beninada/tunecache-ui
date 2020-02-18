import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Tracks from './Tracks';
import Playlists from './Playlists';
import { useSelector } from 'react-redux';
import TrackService from '../api/track.service';
import PlaylistService from '../api/playlist.service';

const Home = () => {
  const { username, id } = useSelector(
    (state) => state.loggedInUser
  );

  const [tracks, setTracks] = useState(null);
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    TrackService.getTracks(id).then(tracks => {
      setTracks(tracks);
      PlaylistService.getPlaylists(id).then(playlists => {
        setPlaylists(playlists);
      });
    });

  }, [id]);

  return (
    <Layout>
      <p>
        This is the home page.
      </p>

      {username && tracks && playlists &&
        <div>

          <div>
            <p>
              <span>Logged in as: {username}.</span>
            </p>
          </div>

          <div className="mt-3">
            <h4>Tracks</h4>
            <Tracks tracks={tracks}>
            </Tracks>
          </div>

          <div className="mt-3">
            <h4>Playlists</h4>
            <Playlists playlists={playlists}>
            </Playlists>
          </div>
        </div>
      }

    </Layout>
  );
};

export default Home;
