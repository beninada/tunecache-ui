import React from 'react';
import Layout from './Layout';
import { useSelector } from 'react-redux';

const Home = () => {
  const { username } = useSelector(
    (state) => state.loggedInUser
  );

  return (
    <Layout>
      <p>
        This is the home page.
      </p>
      <p>
        {username && <span>Logged in as: {username}.</span>}
      </p>
    </Layout>
  );
};

export default Home;
