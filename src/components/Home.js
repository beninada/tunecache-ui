import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Tracks from './Tracks';
import { useSelector } from 'react-redux';
import TrackService from '../api/track.service';

const Home = () => {
  const { username, id } = useSelector(
    (state) => state.loggedInUser
  );

  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    TrackService.getTracks(id).then(tracks => {
      setTracks(tracks);
    });

  }, [id]);

  return (
    <Layout>
      <p>
        This is the home page.
      </p>

      {username && tracks &&
        <div>
          <p>
            <span>Logged in as: {username}.</span>
          </p>
          <Tracks tracks={tracks}>
          </Tracks>
        </div>
      }

    </Layout>
  );
};

export default Home;
