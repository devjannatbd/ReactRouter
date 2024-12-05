import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";


const Home = () => {

  return (
    <div style={{display:'grid',justifyContent:'center',alignItems:'center',gap:'20px'}}>
      This is from Home Component
      <Navbar /> 
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;