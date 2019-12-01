import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  Button
} from 'react-bootstrap';

import TrackService from '../api/track.service';

function DragnDrop(props) {

  const onDrop = useCallback((acceptedFiles) => {

    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => {
        console.log(`${file}` + 'was aborted!');
      }
      reader.onerror = () => {
        console.log(`${file}` + 'couldnt be uploaded!');
      }
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);

      };
      reader.readAsArrayBuffer(file);


    });

  }, []);

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({ onDrop });

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>

      {files.length > 0 &&
        <div>
          <aside>
            <h4>Files</h4>
            <hr/>
            <ul>{files}</ul>
          </aside>
          <Button variant="primary" type="submit">
            Upload
        </Button>
        </div>
      }

    </section>
  );
}

export default DragnDrop;
