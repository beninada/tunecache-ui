import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import allGenders from '../constants/genres';

import { Form, Group, Label, Control, Text, Button } from 'react-bootstrap';


function UploadInformation() {

  const [genres, setGenres] = useState(null);

  useEffect(() => {
    setGenres(allGenders.map(opt => ({ label: opt.genre, value: opt.id })));
  }, []);

  return (
    <section className="container">
      <Form>
        <Form.Group controlId="trackTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Track Title" />
        </Form.Group>

        <Form.Group controlId="trackDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="description" rows="3" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Genres</Form.Label>
            <Select options={genres} isMulti />
        </Form.Group>


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
}

export default UploadInformation;
