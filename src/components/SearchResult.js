import React from 'react';
import { Hits, connectHits } from 'react-instantsearch-dom';



const SearchResult = () => {



  const Hits = ({ hits }) => (
    <ol>
      {hits.map(hit => (
        <li key={hit.uuid}>{hit.uuid}</li>
      ))}
    </ol>
  );

  const CustomHits = connectHits(Hits);

  return (
    <CustomHits />
  );






};





export default SearchResult;
