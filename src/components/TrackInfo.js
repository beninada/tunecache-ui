import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import { Form, Button, Alert } from "react-bootstrap";
import { GENRES } from "../constants/genres";
import { SCALES } from "../constants/scales";
import TrackService from "../api/track.service";
import { useHistory } from "react-router-dom";
import { resetTrackUpload } from "../store/trackUpload.slice";

const TrackInfo = () => {
  const handleScaleChange = (selectedOption) => {
    setScale(selectedOption.value);
  };

  const dispatch = useDispatch();

  const tracks = useSelector((state) => state.trackUpload);

  const history = useHistory();
  const [scale, setScale] = useState(null);
  const [scales, setScales] = useState(null);
  const [genres, setGenres] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    setGenres(
      GENRES.map((genre, index) => ({
        label: genre,
        value: index,
      }))
    );
    setScales(
      SCALES.map((scale, index) => ({
        label: scale,
        value: scale,
      }))
    );
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await TrackService.update({
        title: event.target.trackTitle.value,
        description: event.target.trackDescription.value,
        bpm: parseInt(event.target.trackBpm.value),
        key: event.target.trackKey.value,
        scale: scale,
        duration: parseInt(event.target.trackDuration.value),
        userId: parseInt(tracks.tracks[0].user_id),
        uuid: tracks.tracks[0].uuid,
      });
      dispatch(resetTrackUpload());
      history.push("/");
    } catch (error) {
      console.error(error);
      setErrors(error.response.data.errors);
    }
  };

  return (
    <div>
      {tracks && (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="trackTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Track Title" />
          </Form.Group>

          <Form.Group controlId="trackDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Track Description"
            />
          </Form.Group>

          <Form.Group controlId="trackGenre">
            <Form.Label>Genres</Form.Label>
            <Select options={genres} isMulti />
          </Form.Group>

          <Form.Group controlId="trackBpm">
            <Form.Label>Bpm</Form.Label>
            <Form.Control type="text" placeholder="Track Bpm" />
          </Form.Group>

          <Form.Group controlId="trackKey">
            <Form.Label>Key</Form.Label>
            <Form.Control type="text" placeholder="Track Key" />
          </Form.Group>

          <Form.Group controlId="scale">
            <Form.Label>Scale</Form.Label>
            <Select options={scales} onChange={handleScaleChange} />
          </Form.Group>

          <Form.Group controlId="trackDuration">
            <Form.Label>Duration</Form.Label>
            <Form.Control type="text" placeholder="Track Duration" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}

      <div className="mt-3">
        {errors &&
          errors.map((error, index) => (
            <Alert variant="danger" key={index}>
              {error}
            </Alert>
          ))}
      </div>
    </div>
  );
};

export default TrackInfo;
