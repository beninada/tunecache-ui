import ApiService from '../../common/api.service';
import Layout from '../../components/Layout';

const User = props => {
  return (
    <Layout>
      <h1>{props.user.uri}</h1>
      <p>{props.user.profile && props.user.profile.city ? props.user.profile.city : ''}</p>
    </Layout>
  );
}

User.getInitialProps = async function(context) {
  // Fetch the user's profile
  const { uri } = context.query;
  const res = await ApiService.get(`users/artist/${uri}/profile`);

  return {
    user: res.data,
  };
};

export default User;
