import React, { useState, useEffect } from 'react'
import Navbar1 from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Event_card from './Event_card';
import datas from './datas';
import data1 from './data1';


function createCard(data) {
  return (
    <Event_card
    key={data.id}
    title={data.title}
    description={data.description}
    img={data.img}
    date={data.date}
  />
  );
}

function createCard1(dataa) {
  return (
    <Event_card
    key={dataa.id}
    title={dataa.title}
    description={dataa.description}
    img={dataa.img}
    date={dataa.date}
  />
  );
}

function Events(data,dataa) {

  return (
    <div>
    <Navbar1 />
    <div class="col main">
          <h1 id="podcast-content">Events</h1>
    </div>
      <Sidebar />
      <h1>Upcoming</h1><br/>
       {datas.map(createCard)}
       <br/><h1>Past</h1><br/>
       {data1.map(createCard1)}
      <Footer />
    </div>
  )
}

export default Events;
