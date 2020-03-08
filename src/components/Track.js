import React, {
  useEffect,
  useState
} from 'react';
import {
  useParams
} from 'react-router-dom';
import TrackService from '../api/track.service';
import {
  Alert,
  Button,
  Image
} from 'react-bootstrap';
import default_background from '../img/bg.jpg';

const Track = () => {

  let {
    uuid
  } = useParams();

  const buttonRef = React.createRef();

  const [track, setTrack] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    TrackService.getTrack(uuid).then(track => {
      setTrack(track);
    });
  }, [uuid]);

  const uploadImage = async (event) => {
    event.preventDefault();
    try {

      var picture = event.target.files[0];

      var validTypes = ['image/jpg', 'image/jpeg', 'image/png'];

      if (validTypes.indexOf(picture.type) < 0) {
        setErrors('File extension not supported.');
      }
      if (picture.size / 1024 / 1024 >= 10) {
        setErrors('File is too big. Please upload a file smaller than 10MB.');
      }

      let updatedTrack = await TrackService.uploadArtwork({
        file: picture,
        userId: track.user_id,
        trackId: track.id
      });

      setTrack(updatedTrack);
      window.location.reload();

    } catch (error) {
      console.error(error);
      setErrors(error.response.data.message);
    }
  };

  const triggerInput = async () => {
    buttonRef.current.click();
  };

  return (
    <div>

        {track &&
        < div >
            <Image src={ track.cover_image === null ? default_background : track.cover_image } rounded />

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

            <br/>
            <h3>{track.title}</h3>
            <h5>{track.description}</h5>
            <p><label>BPM:</label> {track.bpm}</p>
            <p><label>Key:</label> {track.key}</p>
            <p><label>Scale:</label> {track.scale}</p>
            <p><label>Date Created:</label> {track.created_at}</p>
          </div>
        }


    < /div>
  );
};

export default Track;
