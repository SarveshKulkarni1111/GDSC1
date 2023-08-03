/* eslint-disable */
import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './Components/Home';
import Events from './Components/Events';
import Podcast from './Components/Podcast';
import Projects from './Components/Projects';
import Members from './Components/Members';
import Contact_us from './Components/Contact_us';
import Join_us from './Components/Join_us';
import UpcomingEvents from './Components/UpcomingEvents';
import PastEvents from './Components/PastEvents';


function App() {
  return (
    <BrowserRouter>
    <div>
    <div>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/events' element = {<Events />} />
        <Route path='/podcast' element = {<Podcast />}/>
        <Route path='/projects' element = {<Projects />} />
        <Route path='/members' element = {<Members />} />
        <Route path='/contactUs' element = {<Contact_us />} />
        <Route path='/joinUs' element = {<Join_us />} />
        <Route path='/UpcomingEvents' element = {<UpcomingEvents />} />
        <Route path='/PastEvents' element = {<PastEvents />} />
      </Routes>
    </div>
    </div>
    </BrowserRouter>
    );
}

export default App;
