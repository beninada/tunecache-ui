import Layout from '../../components/Layout';

const Track = props => {
  return (
    <Layout>
      <h1>{props.track.name}</h1>
      <p>{props.track.summary.replace(/<[/]?[pb]>/g, '')}</p>
      <img src={props.track.image.medium} />
    </Layout>
  );
}

Track.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const track = await res.json();

  return { track };
};

export default Track;
