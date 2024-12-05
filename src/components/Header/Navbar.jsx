import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div  style={{display:'grid',justifyContent:'center',alignItems:'center'}}>
      <h1>This is Navbar</h1>
      <div style={{display:'flex',gap:'30px',}}>
      <Link to="/">Home</Link>    
      <Link to="/about">About</Link>
      <Link to="/service">Service</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/career">Career</Link>
      </div>
    </div>
  );
};

export default Navbar;