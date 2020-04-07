import React from "react";
import Layout from "../components/Layout";
import SearchHits from "../components/SearchHits";
import algoliasearch from "algoliasearch/lite";
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
        <SearchHits />
      </InstantSearch>
    </Layout>
  );
};

export default Search;
