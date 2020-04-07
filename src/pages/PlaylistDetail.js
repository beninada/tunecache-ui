import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PlaylistService from "../api/playlist.service";
import TrackList from "../components/TrackList";
import Layout from "../components/Layout";

const PlaylistDetail = () => {
  const [playlist, setPlaylist] = useState(null);
  const [tracks, setTracks] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    PlaylistService.getPlaylist(id).then((playlist) => {
      setPlaylist(playlist);
    });
    PlaylistService.getPlaylistTracks(id).then((tracks) => {
      setTracks(tracks);
    });
  }, [id]);

  return (
    <Layout>
      {playlist && (
        <div>
          <h3>{playlist.title}</h3>
          <p>{playlist.description}</p>
        </div>
      )}
      {tracks && <TrackList tracks={tracks}></TrackList>}
    </Layout>
  );
};

export default PlaylistDetail;
