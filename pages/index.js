import Link from 'next/link';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApiService from '../common/api.service';

const Index = props => (
  <Layout>
    <ul>
      {props.users && props.users.map(user => (
        <li key={user.id}>
          <Link href="/user/[uri]" as={`/user/${user.uri}`}>
            <a>{user.username}</a>
          </Link>
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
  const res = await ApiService.get(`users?artists=1`);

  return {
    users: res.data,
  };
};

export default Index;
