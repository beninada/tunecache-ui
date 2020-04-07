import React from "react";
import Layout from "./Layout";
import Hits from "./Hits";
import algoliasearch from "algoliasearch/lite";
// Update the import
import { InstantSearch, SearchBox } from "react-instantsearch-dom";

const Search = () => {
  const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_APP_ID,
    process.env.REACT_APP_ALGOLIA_SEARCH_ONLY_KEY
  );

  return (
    <Layout>
      <InstantSearch searchClient={searchClient} indexName="dev_tracks">
        <SearchBox />
        <br />
        <Hits />
      </InstantSearch>
    </Layout>
  );
};

export default Search;
