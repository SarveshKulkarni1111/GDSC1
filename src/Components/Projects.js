import React from 'react'
import Navbar1 from './Navbar';
import Footer from './Footer';
import Project from './Project.css';

const Projects = () => {
  return (
    <div>
    <Navbar1 />
  
    <div class="container-fluid">
        <hr/>
        <h1 class="text-center">PROJECTS</h1>
    </div>
    <hr class="horizontal-line"/>
    <div class="container">
        <div class="row">
            <div class="col">
                <p class="content">Why designers should move from px to rem (and how to do that in Figma)</p>
                <p class="content-a">If you are anything like me, you happily used Pixel (px) in Sketch and Figma during the past years without thinking much about it. It is the...</p>
            </div>
            <div class="col">
                <img src="images/Rectangle 123.png" alt=""/>
            </div>
        </div>
        <hr class="horizontal-line"/>
        <div class="row">
            <div class="col">
                <p class="content">Why designers should move from px to rem (and how to do that in Figma)</p>
                <p class="content-a">If you are anything like me, you happily used Pixel (px) in Sketch and Figma during the past years without thinking much about it. It is the...</p>
            </div>
            <div class="col">
                <img src="images/Rectangle 123.png" alt=""/>
            </div>
        </div>
        <hr class="horizontal-line"/>
    </div>
    <br/><br/><br/><br/>
    
      <Footer />
    </div>
  )
}

export default Projects;
