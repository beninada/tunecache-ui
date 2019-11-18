import Link from 'next/link';
import Button from 'react-bootstrap/Button';

const linkStyle = {
  marginRight: 15
};

const Navbar = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>
        <strong>TuneCache</strong>
      </a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Button variant="primary">Sign Up</Button>
  </div>
);

export default Navbar;
