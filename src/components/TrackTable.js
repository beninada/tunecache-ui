import React from 'react';
// import TrackRow from './TrackRow';
import Table from 'react-bootstrap/Table';

const TrackTable = () => {
  return (

<div>
      <Table striped bordered hover responsive>
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
        </tbody>

      </Table>

    </div>

  );
};

export default TrackTable;
