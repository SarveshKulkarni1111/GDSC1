import React from 'react'
import Navbar1 from './Navbar';
import Footer from './Footer';
import Podcast1 from './Podcast1.css';
import Sidebar from './Sidebar';

const Podcast = () => {
  return (
    <div>
    <Navbar1 />
    <div class="container-fluid">
    <div class="row">
     
      <div class="col blue-box-content ">
          <h1>PODCAST</h1>
      </div>
    </div>
  </div>
<Sidebar />
  <div class="blackbox">
    <div class="container">
        <div class="row">
            <div class="col"><h1>Recent</h1></div>
        </div>
        <div class="row boxed-spotify">
          <div class="col">
            <img src="images/spotify.png" alt=""/>
          </div>
          <div class="col">
            <br/>
            <p>Podcast Episode</p>
            <h1>Episode 1 - Karthik Padmanabhan</h1>
            <button class="spotify-btn"><img src="images/spotify.svg" alt=""/><u>Listen on spotify</u></button>
          </div>
        </div>
        <div class="row">
            <div class="col">
                <h1>All</h1>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <img src="Rectangle 78.png" alt=""/>
                <br/><br/>
                <p>Episode 1 - Karthik <br/> Padmanabhan</p>
            </div>
            <div class="col">
                <img src="images/Rectangle 78.png" alt=""/>
                <br/><br/>
                <p>Episode 1 - Karthik <br/> Padmanabhan</p>
            </div>
            <div class="col">
                <img src="images/Rectangle 78.png" alt=""/>
                <br/><br/>
                <p>Episode 1 - Karthik <br/> Padmanabhan</p>
            </div>
            <div class="col">
                <img src="images/Rectangle 78.png" alt=""/>
                <br/><br/>
                <p>Episode 1 - Karthik <br/> Padmanabhan</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <img src="images/Rectangle 78.png" alt=""/>
                <br/><br/>
                <p>Episode 1 - Karthik <br/> Padmanabhan</p>
            </div>
            <div class="col">
                <img src="images/Rectangle 78.png" alt=""/>
                <br/><br/>
                <p>Episode 1 - Karthik <br/> Padmanabhan</p>
            </div>
            <div class="col">
                <img src="images/Rectangle 78.png" alt=""/>
                <br/><br/>
                <p>Episode 1 - Karthik <br/> Padmanabhan</p>
            </div>
            <div class="col">
                <img src="images/Rectangle 78.png" alt=""/>
                <br/><br/>
                <p>Episode 1 - Karthik <br/> Padmanabhan</p>
            </div>
        </div>
        <br/><br/><br/>
    </div>
  </div>
  
      <Footer />
    </div>
  )
}

export default Podcast;
