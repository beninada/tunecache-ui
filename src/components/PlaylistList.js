import React from "react";
import { Link } from "react-router-dom";

const PlaylistList = ({ playlists }) => {
  return (
    <ul>
      {playlists &&
        playlists.map((playlist, index) => {
          return (
            <li key={playlist.id}>
              <Link to={`../playlists/${playlist.id}`}>{playlist.title}</Link>
            </li>
          );
        })}
    </ul>
  );
};

export default PlaylistList;
