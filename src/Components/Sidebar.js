import React from 'react'
import styles from './Sidebar.css';
import Discord from './discord.svg';
import Twitter from './twitter.svg';
import Instagram from './instagram.svg';
import Linkedin from './linkedin.svg';


const Sidebar = () => {
  return (
    <div class="container-fluid">
    <div class="row">
      <div class="col-auto sidebar overlap">
        <a href='https://discord.gg/cpWCJw9QZs' target="_blank" rel="noreferrer"><img src={Discord} alt="Discord"/></a>
        <a href='https://twitter.com/dscmitwpu?lang=en' target="_blank" rel="noreferrer"><img src={Twitter} alt="Twitter" /></a>
        <a href='https://instagram.com/gdscmitwpu?igshid=YmM0MjE2YWMzOA==' target="_blank" rel="noreferrer"><img src={Instagram} alt="Instagram" /></a>
        <a href='https://www.linkedin.com/company/gdsc-mit-wpu/about/' target="_blank" rel="noreferrer"><img src={Linkedin} alt="Linkedin" /></a>
      </div>
      
    </div>
  </div>
  )
}

export default Sidebar;
