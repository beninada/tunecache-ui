import React from 'react';
import Layout from './Layout';
import Tracks from './Tracks';
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

      {username &&
        <div>
          <p>
            <span>Logged in as: {username}.</span>
          </p>
          <Tracks>
          </Tracks>
        </div>
      }

    </Layout>
  );
};

export default Home;
