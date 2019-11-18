import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Navbar />
    {props.children}
    <style jsx global>{`
      // Insert global styles here
    `}</style>
  </div>
);

export default Layout;
