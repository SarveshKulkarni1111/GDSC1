import React from 'react'
import Navbar1 from './Navbar'
import Footer from './Footer'

function PastEvents() {
  return (
    <div>
    <Navbar1 />
    <button id="back-btn"><img src="images/arrow-left-circle.svg" alt="" id="back-btn"/></button>

<div class="container-fluid">
    <hr/>
    <h1 class="text-center">PAST<br/>EVENT</h1>
</div>

<div class="container">
    <div class="row">
        <div class="col">
            <h1>Android Seekho</h1>
            <hr/>
            <img src="images/twitter.svg" alt="" class="image"/>
            <img src="images/instagram.svg" alt="" class="image"/>
            <img src="images/linkedin.svg" alt="" class="image"/>
            <br/><br/>
            <p id="android-seekho-para">Get ready for an exhilarating journey into the world of Android app development as we proudly present "Android Seekho" Season 2! This immersive event is designed to empower aspiring developers and enthusiasts alike, equipping them with the knowledge and tools necessary to create innovative and cutting-edge mobile applications.</p>
        </div>
        <div class="col">
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="images/Rectangle 123.png" class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src="images/Rectangle 123.png" class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src="images/Rectangle 123.png" class="d-block w-100" alt="..."/>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
        </div>
    </div>
</div>

<div class="blackbox">
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>Agenda</h1>
            </div>
            <div class="col">
                <div class="nav">
                    <div class="item">20 March</div>
                    <div class="item">21 March</div>
                    <div class="item">22 March</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <ul>
                    <li>Guest Lecture 1</li>
                    <li>Guest Lecture 2</li>
                    <li>Guest Lecture 3</li>
                </ul>
            </div>
            <div class="col-md-4">
                <p>April 20, Thursday <br/> 9:00 A.M.</p>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <center>
                    <div id="carouselExampleIndicators" class="carousel slide">
                        <div class="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="images/Rectangle 123.png" class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src="images/Rectangle 123.png" class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src="images/Rectangle 123.png" class="d-block w-100" alt="..."/>
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
                </center>
            </div>
        </div>
      
        <br/><br/>

        <div class="flex-container">
          <div class="flex-item"><img src="images/Rectangle 65.png" alt=""/></div>
          <div class="flex-item" id="pic-item"><img src="images/Rectangle 65.png" alt=""/></div>
          <div class="flex-item"><img src="images/Rectangle 65.png" alt=""/></div>
        </div>
        
        <div class="row">
          <div class="col">
            <center>
              <button type="submit" id="browse"><p id="browser-content">Browse More Events</p></button>
            </center>
          </div>
        </div>
        


      <br/><br/>
    </div>
</div>
    <Footer />  
    </div>
  )
}

export default PastEvents
