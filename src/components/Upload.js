import React, { useState } from 'react';
import {
  Button,
  Form,
  Alert,
} from 'react-bootstrap';

import Layout from './Layout';
import { useSelector, useDispatch } from 'react-redux';

import Drag from './DragnDrop';
import Info from './UploadInformation';

const Upload = () => {

  const [errors, setErrors] = useState(null);

  const tracksS  = useSelector(
    (state) => state.trackUpload
  );


  return (
    <Layout>
      <h1 className="text-center font-weight-bold">Upload</h1>
      <br />

        <Drag>
        </Drag>

        {tracksS &&
          <Info>
          </Info>
        }

      <div className="mt-3">
        {errors && errors.map((error, index) =>
          <Alert variant="danger" key={index}>{error}</Alert>
        )}
      </div>
    </Layout>
  );
};

export default Upload;
