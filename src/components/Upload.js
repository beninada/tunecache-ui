import React from 'react';

import Layout from './Layout';
import { useSelector } from 'react-redux';

import Drag from './DragnDrop';
import Info from './UploadInformation';

const Upload = () => {
  const { tracks }  = useSelector(
    (state) => state.trackUpload
  );

  return (
    <Layout>
      <h1 className="text-center font-weight-bold">Upload</h1>
      <br />
      <Drag>
      </Drag>
      {(tracks && tracks.length) ?
        <Info>
        </Info>
      : ''}
    </Layout>
  );
};

export default Upload;
