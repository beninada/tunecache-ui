import ApiService from '../../common/api.service';
import Layout from '../../components/Layout';

const User = props => {
  return (
    <Layout>
      <h1>{props.user.uri}</h1>
    </Layout>
  );
}

User.getInitialProps = async function(context) {
  const { uri } = context.query;
  const res = await ApiService.get(`users/artist/${uri}/profile`);

  return {
    user: res.data,
  };
};

export default User;
