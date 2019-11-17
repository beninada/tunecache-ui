import Link from 'next/link';

const TrackLink = props => (
  <Link href="/track/[id]" as={`/track/${props.id}`}>
    <a>{props.name}</a>
  </Link>
);

export default TrackLink;
