import React from 'react'
import Navbar1 from './Navbar';
import Footer from './Footer';
import {Link} from "react-router-dom";
import BackArrow from './BackArrow.png';
// import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";
import About from './About.png'
import linkedin from './linkedin.svg';
import twitter from './twitter.svg';
import instagram from './instagram.svg';
import Card1 from './Card1.png';
import Group24 from './Group24.svg';

function UpcomingEvents() {
  return (
    <div>
    <Navbar1 />
    <Link as={Link} to="/events"><img src={BackArrow} alt="Back Arrow"/></Link>
    <div className="container-fluid">
        <hr />
        <h1 className="text-center">UPCOMING EVENT</h1>
      </div><br/>
      {/* <img src={About} className='sliderimg'/>
      <img src={About} className='sliderimg'/>
      <img src={About} className='sliderimg'/>
      <img src={About} className='sliderimg'/>
      <AliceCarousel /> */}


      <div className="container">
    <div className="row">
        <div className="col">
            <h1>GDSC WOW</h1>
            <hr/>
            <img src={twitter} alt="twitter" className="image"/>
            <img src={instagram} alt="instagram" className="image"/>
            <img src={linkedin} alt="linkedin" className="image"/>
            <br/><br/>
            <p id="android-seekho-para">Get ready for an exhilarating journey into the world of Android app development as we proudly present "Android Seekho" Season 2! This immersive event is designed to empower aspiring developers and enthusiasts alike, equipping them with the knowledge and tools necessary to create innovative and cutting-edge mobile applications.</p>
        </div>
        <div class="col">
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="images/Rectangle 123.png" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="images/Rectangle 123.png" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="images/Rectangle 123.png" className="d-block w-100" alt="..."/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
        </div>
    </div>
</div>


<div className="blackbox">
    <div className="container">
        <div className="row">
            <div className="col">
                <h1>Agenda</h1>
            </div>
            <div className="col">
                <div className="nav">
                    <div className="item">20 March</div> 
                    <div className="item">21 March</div> 
                    <div className="item">22 March</div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <ul>
                    <li>Guest Lecture 1</li>
                    <li>Guest Lecture 2</li>
                    <li>Guest Lecture 3</li>
                </ul>
            </div>
            <div className="col-md-4">
                <p>April 20, Thursday <br/> 9:00 A.M.</p>
            </div>
        </div>
        </div>
        </div>

        <div class="blued-boxed">
        <div class="container">
            <div class="row">
                <div class="col">
                    <img src={Card1} alt="" />
                </div>
                <div class="col m-4">
                    <p class="dates">16th April, 2023 - 18th April, 2023</p>
                    <h3 class="mit-wpu-text">VK hall, MIT-World Peace University Kothrud, Pune</h3>
                    <br/>
                    <div class="row">
                        <div class="col-md-3">
                            <button class="white-buttons">
                                <div class="small-black-box">
                                    <p class="item-text">31</p>
                                </div>
                                <p class="register-text">Register</p>
                            </button>
                        </div>
                        <br/><br/><br/>
                        <div class="col-md-9">
                            <button class="white-buttons">
                                <div class="small-black-box">
                                    <p class="item-text"><img src={Group24} alt="" /></p>
                                </div>
                                <p class="register-text"><u>View on google maps</u></p>
                            </button>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
      
    </div>
  )
}

export default UpcomingEvents
