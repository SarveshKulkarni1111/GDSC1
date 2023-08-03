import React from 'react'
import Navbar1 from './Navbar';
import Footer from './Footer';
import Contact_us1 from './Contact_us1.css';

const Contact_us = () => {
  return (
    <div>
    <Navbar1 />
    <div className="container-fluid">
        <hr />
        <h1 className="text-center">Contact Us</h1>
      </div>
      <br /><br />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <div className="sidebar">
              <h2>Email</h2>
              <p>GDSC@GMAIL.COM</p>
              <h2>Social</h2>
              <p><u>INSTAGRAM</u></p>
              <p><u>TWITTER</u></p>
              <p><u>TWITTER</u></p>
              <p><u>LINKEDIN</u></p>
            </div>
          </div>
          <div className="col-sm-12 col-md-9">
            <div className="row">
              <div className="col">
                <h3>Full Name</h3>
                <input type="text" name="" />
              </div>
              <div className="col">
                <h3>Phone Number</h3>
                <input type="text" name="" />
              </div>
            </div>
            <br /><br />
            <div className="row">
              <div className="col">
                <h3>Email Address</h3>
                <input type="text" name="" />
              </div>
            </div>
            <br /><br />
            <div className="row">
              <div className="col">
                <h3>Reason for contacting us</h3>
                <input type="text" name="" style={{ width: '75%' }} />
              </div>
            </div>
            <br /><br />
            <div className="row">
              <div className="col text-end">
                <button type="button" className="btn btn-dark">Send</button>
              </div>
            </div>
            <br /><br />
          </div>
        </div>
      </div>
      <br /><br />
    
      <Footer />
    </div>
  )
}

export default Contact_us;
