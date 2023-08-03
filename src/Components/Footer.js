import React from 'react'
import styles from './Footer.css';
import WhiteLogo from './WhiteLogo.png';


const Footer = () => {
  return (
    <div>
      <footer className="bg-body-dark text-center py-4">
        <div className="container">
          <div className="row footer-content">
            <div className="col">
              <img src={WhiteLogo} alt="GDSC" />
              <br /><br />
            </div>
            <div className="col">
              <h5 className="text-white">Email</h5>
              <a href='mailto:gdscmitofficial@mitwpu.edu.in' target="_blank" rel="noreferrer" className="text-white">GDSC@GMAIL.COM</a>
            </div>
            <div className="col">
              <h5 className="text-white">Social</h5>
              <a href='https://instagram.com/gdscmitwpu?igshid=YmM0MjE2YWMzOA==' target="_blank" rel="noreferrer" className="text-white">INSTAGRAM</a>
            </div>
            <div className="col">
              <br />
              <a href='https://twitter.com/dscmitwpu?lang=en' target="_blank" rel="noreferrer" className="text-white">TWITTER</a>
            </div>
            <div className="col">
              <br />
              <a href='https://www.linkedin.com/company/gdsc-mit-wpu/about/' target="_blank" rel="noreferrer" className="text-white">LINKEDIN</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
