import React from 'react';
import Layout from './Layout';
import TrackRow from './TrackRow';
import TrackTable from './TrackTable';

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const Search = () => {


  const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_APP_ID,
    process.env.REACT_APP_ALGOLIA_SECRET_KEY
  );

  return (

    <Layout>

      <div className="ais-InstantSearch">
        <InstantSearch
          indexName="dev_tracks"
          searchClient={searchClient}
        >
          <div className="right-panel">
            <SearchBox />
            <Hits hitComponent={TrackRow} />
          </div>
        </InstantSearch>
      </div>

      <TrackTable>
      </TrackTable>

    </Layout>

  );
};

export default Search;
