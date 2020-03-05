import React, {
  useState,
  useEffect
} from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../api/user.service';
import TrackService from '../api/track.service';
import PlaylistService from '../api/playlist.service';
import Tracks from './Tracks';
import Playlists from './Playlists';
import default_picture from '../img/user.png';
import {
  Alert, Card, Button
} from 'react-bootstrap';

const User = () => {

  const buttonRef = React.createRef();

  const [tracks, setTracks] = useState(null);
  const [artist, setArtist] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [errors, setErrors] = useState(null);

  let {
    uri
  } = useParams();

  useEffect(() => {
    UserService.artist(uri).then(artist => {
      setArtist(artist);
      TrackService.getTracks(artist.id).then(tracks => {
        setTracks(tracks);
      });
      PlaylistService.getPlaylists(artist.id).then(playlists => {
        setPlaylists(playlists);
      });
    });

  }, [uri]);

  const uploadImage = async (event) => {
    event.preventDefault();
    try {

      var picture = event.target.files[0];

      var validTypes = ['image/jpg', 'image/jpeg', 'image/png'];

      if (validTypes.indexOf(picture.type) < 0) {
        throw 'File extension not supported.';
      }
      if (picture.size / 1024 / 1024 >= 10) {
        throw 'File is too big. Please upload a file greater or lower than 10MB.';
      }

      var user = await UserService.uploadImage({
        type: 'artist_profile',
        file: picture,
        userId: artist.id
      });

      setArtist(user);

    } catch (error) {
      console.error(error);
      setErrors(typeof error === 'string' ? error : error.response.data.message);
    }
  };

  const triggerInput = async () => {
    buttonRef.current.click();
  };

  return (
    <div>

      <div>
        { artist &&
        <Card style={{ width: '36rem' }}>
          <Card.Img variant="top" src={ artist.profile_image === null ? default_picture : artist.profile_image } />
          <Card.Body>
            <Card.Title>{artist.username}</Card.Title>
            <Card.Text>
              URI: {artist.uri}
            </Card.Text>
            <Card.Text>
              Email: {artist.email}
            </Card.Text>
            <div>
              <input
              type="file"
              accept=".jpg,.jpeg,.png"
              multiple={false}
              onChange={ uploadImage }
              style={{display: 'none'}}
              ref={buttonRef} / >
              <Button variant="primary" onClick={ triggerInput }>Upload Profile Image</Button>
            </div>
            <div className="mt-3">
              {errors &&
                <Alert variant="danger">{ errors }</Alert>
              }
            </div>
          </Card.Body>
        </Card>
        }
      </div>
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
