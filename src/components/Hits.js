import React from "react";

import { Table, Button } from "react-bootstrap";

import { connectHits } from "react-instantsearch-dom";

const Hits = ({ hits }) => {
  return (
    <div>
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Track Title/Artist</th>
            <th>Style</th>
            <th>Genre</th>
            <th>Tone</th>
            <th>Bpm</th>
            <th>Length</th>
            <th>Download</th>
          </tr>
        </thead>

        <tbody>
          {hits.length === 0 && (
            <tr>
              <td colSpan="8">No track found.</td>
            </tr>
          )}
          {hits.length > 0 &&
            hits.map((hit, index) => (
              <tr key={index}>
                <th>
                  <Button variant="success">&#9658;</Button>
                </th>
                <td>{hit.title}</td>
                <td>{hit.style}</td>
                <td>{hit.genre}</td>
                <td>{hit.key}</td>
                <td>{hit.bpm}</td>
                <td>{hit.length}</td>
                <th>
                  <a href={`${hit.url}`}>
                    <Button variant="success">Download</Button>
                  </a>
                </th>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default connectHits(Hits);
