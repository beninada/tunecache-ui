import React, { useState } from 'react';
import {
  Button,
  Form,
  Alert,
} from 'react-bootstrap';
import TrackService from '../api/track.service';
import Layout from './Layout';
import { useSelector } from 'react-redux';

import Drag from './DragnDrop';
import Info from './UploadInformation';

const Upload = () => {

  const [props, acceptedFiles] = useState('');

  const [errors, setErrors] = useState(null);

  const handleSubmit = async (event) => {

    event.preventDefault();

    let formData = new FormData();
    for (let i = 0; i < acceptedFiles.length; i++) {
      formData.append('tracks[]', acceptedFiles[i]);
    }

    try {
      const track = await TrackService.upload(formData);
    } catch (error) {
      console.error(error);
      setErrors(error.response.data.errors);
    }
  };

  return (
    <Layout>
      <h1 className="text-center font-weight-bold">Upload</h1>
      <br/>
      <Form onSubmit={ handleSubmit }>

      <Drag>
      </Drag>

      <Info>
      </Info>

      </Form>
      <div className="mt-3">
        {errors && errors.map((error, index) =>
          <Alert variant="danger" key={ index }>{ error }</Alert>
        )}
      </div>
    </Layout>
  );
};

export default Upload;
