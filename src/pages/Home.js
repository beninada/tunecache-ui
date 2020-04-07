import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import TrackList from "../components/TrackList";
import PlaylistList from "../components/PlaylistList";
import { useSelector } from "react-redux";
import TrackService from "../api/track.service";
import PlaylistService from "../api/playlist.service";

const Home = () => {
  const loggedInUser = useSelector((state) => state.loggedInUser);

  const [tracks, setTracks] = useState(null);
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    if (loggedInUser.id) {
      TrackService.getTracks(loggedInUser.id).then((tracks) => {
        setTracks(tracks);
      });
      PlaylistService.getPlaylists(loggedInUser.id).then((playlists) => {
        setPlaylists(playlists);
      });
    }
  }, [loggedInUser]);

  return (
    <Layout>
      <p>This is the home page.</p>

      {loggedInUser.username && tracks && playlists && (
        <div>
          <div>Logged in as: {loggedInUser.username}.</div>
          <div className="mt-3">
            <h2>{`${loggedInUser.username}'s Tracks`}</h2>
            <TrackList tracks={tracks}></TrackList>
          </div>
          <div className="mt-3">
            <h2>{`${loggedInUser.username}'s Playlists`}</h2>
            <PlaylistList playlists={playlists}></PlaylistList>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Home;
