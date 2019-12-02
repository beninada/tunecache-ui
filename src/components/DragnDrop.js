import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  Alert,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import TrackService from '../api/track.service';

import { setTrackUpload } from '../store/trackUpload.slice';

const DragnDrop = () => {
  const dispatch = useDispatch();

  const { id } = useSelector(
    (state) => state.loggedInUser
  );

  const [errors, setErrors] = useState(null);

  const onDrop = useCallback(async (acceptedFiles) => {
    const formData = new FormData();

    for (let i = 0; i < acceptedFiles.length; i++) {
      formData.append('tracks[]', acceptedFiles[i]);
    }

    try {
      const tracks = await TrackService.upload({
        tracks: formData,
        userId: id,
      });
      console.log(tracks);
      dispatch(setTrackUpload(tracks));
    } catch (error) {
      console.error(error);
      setErrors([error.response.data.message]);
    }
  }, [dispatch, id]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <section className="container">
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
      </section>
      <div className="mt-3">
        {errors && errors.map((error, index) =>
          <Alert variant="danger" key={ index }>{ error }</Alert>
        )}
      </div>
    </div>
  );
}

export default DragnDrop;
