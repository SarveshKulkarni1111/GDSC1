import React, { useState }  from 'react'
import Navbar1 from './Navbar';
import styles from './join_us.css';
import Footer from './Footer';
import sendLetter from './sendLetter.png';


const Join_us = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    officialEmail: '',
    personalEmail: '',
    course: '',
    year: '',
    role: '',
    about: '',
    file: null
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      file: file
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

return (
  <div className='con'>
    <Navbar1 />
    <div className="container-fluid">
        <hr />
        <h1 className="text-center">JOIN US</h1>
      </div><br/>

      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-3">
          <div className="sidebar">
              <h2>Email</h2>
              <p>GDSC@GMAIL.COM</p>
              <h2>Social</h2>
              <p><u>INSTAGRAM</u></p>
              <p><u>TWITTER</u></p>
              <p><u>LINKEDIN</u></p>
            </div>
      </div>
      </div>
      </div>

      <div className='container ' style={{paddingLeft:500}}>

      <form onSubmit={handleSubmit}>
          <div className="col-sm-12 col-md-9">
            <div className="row">
              <div className="col">

      <label >
        <h3>Name:</h3>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      </div>
      <br />
      <div className='col'>
      <label>
        <h3>Phone Number:</h3>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </label>
      </div>
      </div>
      <br />
      <div className="row">
              <div className="col">
      <label>
        <h3>Official Email:</h3>
        <input
          type="email"
          name="officialEmail"
          value={formData.officialEmail}
          onChange={handleChange}
        />
      </label>
      </div>
      <div className='col'>
      <br />
      <label>
        <h3>Personal Email:</h3>
        <input
          type="email"
          name="personalEmail"
          value={formData.personalEmail}
          onChange={handleChange}
        />
      </label>
      </div>
      </div>
      <br />
      <div className="row">
              <div className="col">
      <label >
        <h3>College Course:</h3>
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
        />
      </label>
      </div>
      <br/>
      <div className='col'>
      <label>
       <h3>Which year you study in:</h3>
        <select
          name="year"
          value={formData.year}
          onChange={handleChange}
        >
          <option value="">Select an option</option>
          <option value="First">First</option>
          <option value="Second">Second</option>
          <option value="Third">Third</option>
          <option value="Fourth">Fourth</option>
        </select>
      </label>
      </div>
      </div>
      <br />
      <div className="row">
              <div className="col">
      <label>
        <h3>Preferred Role:</h3>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="">Select a role</option>
          <option value="Content">Content</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Finance">Finance</option>
          <option value="Legal">Legal</option>
          <option value="Management">Management</option>
        </select>
      </label>
      </div>
      </div>
      <br/>
      <div className="row">
              <div className="col text-end">
      <label >
        <h3>Tell us about yourself:</h3>
        <input
          type="text"
          name="about"
          value={formData.about}
          onChange={handleChange}
        />
      </label>
      </div>
      </div>
      <br />
      <div className="row">
              <div className="col text-end">
      <label>
        <h3>Upload Portfolio:</h3>
        <input
          type="file"
          name="file"
          onChange={handleFileChange}
        />
      </label>
      </div>
      </div>
      <br />
      <button type="submit"><h6>Send for Approval</h6><img scr={sendLetter} alt="send" /></button>
      </div>
      </form>
      </div><br/><br/>
      <Footer />
      </div>
      
  );
}

export default Join_us;
