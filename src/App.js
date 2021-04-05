import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Navbar_Component from './Navbar';
import Blurb from './Blurb';
import Card from './Card';
import Splash from './Splash';
import Projects from './Projects';
import { Contact, Form_Component } from './Contact';
import Footer from './Footer';
import AboutComponent from './AboutComponent';
import Home from "./Home";


import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <React.Fragment>
          
            {/* <Route exact path="/"><Navbar_Component /></Route>
            
            
            <Splash />
            
            <Projects />
            <Contact /> */}
            

            {/* <Form_Component /> */}
            {/* <Footer /> */}
            <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/about"><AboutComponent /></Route>
            
            </Switch>
              
            
        </React.Fragment>
    )
  }
}

export default App;


