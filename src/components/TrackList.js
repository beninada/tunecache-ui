import React from "react";
import { Link } from "react-router-dom";

const TrackList = ({ tracks }) => {
  return (
    <ul>
      {tracks &&
        tracks.map((track, index) => {
          return (
            <li key={index}>
              <Link to={`/tracks/${track.uuid}`}>{track.uuid}</Link>
            </li>
          );
        })}
    </ul>
  );
};

export default TrackList;
