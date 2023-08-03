import React from 'react'
import Navbar1 from './Navbar'
import Footer from './Footer';
import Sidebar from './Sidebar';
import styles from './Home.css';
import Rectangle35 from './Rectangle35.png';
import {Link} from "react-router-dom";
import { Button } from 'react-bootstrap';
// import Element1 from './Element1.png';
// import Element2 from './Element2.png';
// import Element3 from './Element3.png';
// import Element4 from './Element4.png';
// import Element5 from './Element5.png';
// import Element6 from './Element6.png';
import About from './About.png';
import ImageSlider from './ImageSlider';


const Home = () => {
  return (
    <div>
    <Navbar1 />
    
    {/* <div className='container-fluid'> */}
    <div className="col main">
          <h1 id="home-content">GDSC<br></br>MIT-WPU</h1>
          
          <div className = "head-text">
        <div className = "head-image">
          <Link as={Link} to="/joinUs"><img src={Rectangle35} alt="JOIN US"/>
          
          <div className= "text-on-image text-white">
             <h4>JOIN US</h4>
          </div></Link></div>
          {/* <img src={Element1} alt="Element1"/>
          <img src={Element2} alt="Element2"/>
          <img src={Element3} alt="Element3"/>
          <img src={Element4} alt="Element4"/>
          <img src={Element5} alt="Element5"/>
          <img src={Element6} alt="Element6"/> */}
          
      </div>
      </div>
      <Sidebar />
      <div className="blackbox">
    <div className="container">
    <img src={About}></img>
    <ImageSlider />
    </div>
    </div>
      {/* </div> */}
      
      
      <Footer />
    </div>
  )
}

export default Home;
