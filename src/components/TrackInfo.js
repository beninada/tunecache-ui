import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { Form, Button } from 'react-bootstrap';
import { GENRES } from '../constants/genres';

const UploadInformation = () => {
  const { track } = useSelector(
    (state) => state.trackUpload
  );

  const [genres, setGenres] = useState(null);

  useEffect(() => {
    setGenres(GENRES.map((genre, index) => ({
      label: genre,
      value: index,
    })));
  }, []);

  return (
    <Form>
      <Form.Group controlId="trackTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Track Title" />
      </Form.Group>

      <Form.Group controlId="trackDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows="3" placeholder="Track Description" />
      </Form.Group>

      <Form.Group controlId="ControlSelect2">
        <Form.Label>Genres</Form.Label>
        <Select options={genres} isMulti />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default UploadInformation;
