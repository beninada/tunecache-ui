import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from './Layout';
import { Form, Button, Alert } from 'react-bootstrap';
import PlaylistService from '../api/playlist.service';
import { useHistory } from 'react-router-dom';

const CreatePlaylist = () => {

  const { id } = useSelector(
    (state) => state.loggedInUser
  );

  const history = useHistory();
  const [errors, setErrors] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await PlaylistService.createPlaylist({
        title: event.target.playlistTitle.value,
        description: event.target.playlistDescription.value,
        userId: id
      });
      history.push('/');
    } catch (error) {
      console.error(error);
      setErrors(error.response.data.errors);
    }
  };


  return (
    <Layout>
    <div>
      <Form onSubmit={handleSubmit}>
          <Form.Group controlId="playlistTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Playlist Title" />
          </Form.Group>

          <Form.Group controlId="playlistDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" placeholder="Playlist Description" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
      </Button>
        </Form>
    </div>

      <div className="mt-3">
        {errors && errors.map((error, index) =>
          <Alert variant="danger" key={index}>{error}</Alert>
        )}
      </div>

  </Layout>

  );
}

export default CreatePlaylist;
