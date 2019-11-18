import Link from 'next/link';
import Layout from '../components/Layout';
import ApiService from '../common/api.service';

const Index = props => (
  <Layout>
    <ul>
      {props.users && props.users.map(user => (
        // Link to user profiles using dynamic routing
        // https://github.com/zeit/next.js/#dynamic-routing
        <li key={user.id}>
          <Link href="/user/[uri]" as={`/user/${user.uri}`}>
            <a>{user.username}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  // For the sake of example, display artists from the db
  const res = await ApiService.get(`users?artists=1`);

  return {
    users: res.data,
  };
};

export default Index;
