import Layout from '../components/Layout';
import TrackLink from '../components/TrackLink';
import fetch from 'isomorphic-unfetch';
import 'bootstrap/dist/css/bootstrap.min.css';

const Index = props => (
  <Layout>
    <ul>
      {props.tracks && props.tracks.map(track => (
        <li key={track.id}>
          <TrackLink id={track.id} name={track.name} />
        </li>
      ))}
    </ul>
    <style jsx>{`
      h1,
      li {
        font-family: 'Helvetica', 'Arial', sans-serif;
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=music');
  const data = await res.json();

  return {
    tracks: data.map(entry => entry.show)
  };
};

export default Index;
