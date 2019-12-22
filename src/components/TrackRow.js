import React from 'react';
import Button from 'react-bootstrap/Button';

const TrackRow = ({hit} ) => {

  console.log({hit})

  return(
    <ol>
    {hit &&
      <li key={hit.uuid}>{hit.title} - {hit.uuid}</li>
    }
  </ol>
  )


};



export default TrackRow;
