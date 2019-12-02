import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  Button, Form
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TrackService from '../api/track.service';

import { setTrackUpload } from '../store/trackUpload.slice';

function DragnDrop() {

  var tracksArray = [];

  const dispatch = useDispatch();
  const history = useHistory();

  const [errors, setErrors] = useState(null);
  const [tracks, setTracks] = useState(null);

  let formData = new FormData();

  const submitForm = async () => {
    try {
      const track = await TrackService.upload(tracks);
      dispatch(setTrackUpload(track));
      history.push('/');

    } catch (error) {
      console.error(error);
      setErrors([error.response.data.message]);
    }
  }

  const onDrop = useCallback((acceptedFiles) => {

    for (let i = 0; i < acceptedFiles.length; i++) {
      formData.append('tracks[]', acceptedFiles[i]);
    }

  });

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({ onDrop });

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <Form onSubmit={ submitForm }>
      <section className="container">

        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>

        {files.length > 0 &&
          <div>
            <aside>
              <h4>Files</h4>
              <hr />
              <ul>{files}</ul>
            </aside>
            <Button variant="primary" type="submit">
              Upload
        </Button>
          </div>
        }

      </section>
    </Form>

  );
}

async function myCustomFileGetter(event) {
  const files = [];
  const fileList = event.dataTransfer ? event.dataTransfer.files : event.target.files;

  for (var i = 0; i < fileList.length; i++) {
    const file = fileList.item(i);

    Object.defineProperty(file, 'myProp', {
      value: true
    });

    files.push(file);
  }

  return files;
}

export default DragnDrop;
