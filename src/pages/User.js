import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Alert, Card, Button } from "react-bootstrap";
import UserService from "../api/user.service";
import TrackService from "../api/track.service";
import PlaylistService from "../api/playlist.service";
import Layout from "../components/Layout";
import TrackList from "../components/TrackList";
import PlaylistList from "../components/PlaylistList";
import default_picture from "../static/images/user.png";

const User = () => {
  const buttonRef = React.createRef();

  const [tracks, setTracks] = useState(null);
  const [artist, setArtist] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [errors, setErrors] = useState(null);

  let { uri } = useParams();

  useEffect(() => {
    UserService.artist(uri).then((artist) => {
      setArtist(artist);
      TrackService.getTracks(artist.id).then((tracks) => {
        setTracks(tracks);
      });
      PlaylistService.getPlaylists(artist.id).then((playlists) => {
        setPlaylists(playlists);
      });
    });
  }, [uri]);

  const uploadImage = async (event) => {
    event.preventDefault();

    let picture = event.target.files[0];
    let validTypes = ["image/jpg", "image/jpeg", "image/png"];

    if (validTypes.indexOf(picture.type) < 0) {
      setErrors("File extension not supported.");
      return;
    }

    if (picture.size / 1024 / 1024 >= 10) {
      setErrors("File is too big. Please upload a file smaller than 10MB.");
      return;
    }

    try {
      var user = await UserService.uploadImage({
        type: "artist_profile",
        file: picture,
        userId: artist.id,
      });
    } catch (error) {
      console.error(error);
      setErrors(error.response.data.message);
      return;
    }

    setArtist(user);
  };

  const triggerInput = async () => {
    buttonRef.current.click();
  };

  return (
    <Layout>
      <div>
        {artist && (
          <Card style={{ width: "36rem" }}>
            <Card.Img
              variant="top"
              src={
                artist.profile_image === null
                  ? default_picture
                  : artist.profile_image
              }
            />
            <Card.Body>
              <Card.Title>{artist.username}</Card.Title>
              <Card.Text>URI: {artist.uri}</Card.Text>
              <Card.Text>Email: {artist.email}</Card.Text>
              <div>
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  multiple={false}
                  onChange={uploadImage}
                  style={{ display: "none" }}
                  ref={buttonRef}
                />
                <Button variant="primary" onClick={triggerInput}>
                  Upload Profile Image
                </Button>
              </div>
              <div className="mt-3">
                {errors && <Alert variant="danger">{errors}</Alert>}
              </div>
            </Card.Body>
          </Card>
        )}
      </div>
      <div>
        {tracks && (
          <div className="mt-4">
            <h2>Tracks</h2>
            <TrackList tracks={tracks} />
          </div>
        )}
        {playlists && (
          <div className="mt-4">
            <h2>Playlists</h2>
            <PlaylistList playlists={playlists} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default User;
