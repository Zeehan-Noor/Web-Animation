import './App.css';
import React from 'react';
import Home from "./Component/Home"
import About from "./Component/About"
import Service from "./Component/Service"
import ContactUs from "./Component/ContactUs"
import Navbar from "./Component/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    < >
  
   
 

  <Router>
    <Navbar/>
    {/* <Home/>
    <Service/>
    <About/>
    <ContactUs/> */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/services" component={Service} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={ContactUs} />
      <Redirect to="/" />
      
    </Switch>
  </Router>
    </>
  );
}

export default App;
