import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../api/user.service';

const User = () => {
  const [artist, setArtist] = useState(null);
  let { uri } = useParams();

  useEffect(() => {
    UserService.artist(uri).then(artist => {
      setArtist(artist);
    });
  }, [ uri ]);

  return (
    <div>
      <h3>{artist && artist.username}</h3>
      <div>URI: {artist && artist.uri}</div>
      <div>Email: {artist && artist.email}</div>
    </div>
  );
};

export default User;
