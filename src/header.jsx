import React,{ Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter as Router,Switch,Route,Link, NavLink} from "react-router-dom";
import App from './App';
import Information from './components/information';
import Company from './components/company';
import Devices from './components/devices';
import Profile from './components/profile';
import Writepost from './components/writepost';

export default class header extends Component {
     render() {
          return (
               <Router>
               <div>
                <h1>USER INFORMATION</h1>
                    <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
    <Nav.Link><NavLink activeStyle={{color:'red'}} to="/information">Information</NavLink></Nav.Link>
    <Nav.Link><NavLink activeStyle={{color:'red'}} to="/devices">Devices</NavLink></Nav.Link>
    <Nav.Link><NavLink activeStyle={{color:'red'}} to="/company">Working Company</NavLink></Nav.Link>
    <Nav.Link><NavLink activeStyle={{color:'red'}} to="/profile">Manager</NavLink></Nav.Link>
    <Nav.Link><NavLink activeStyle={{color:'red'}} to="/profile">Manager</NavLink></Nav.Link>
                         
                    </Nav>
                    </Navbar.Collapse>
                    </Navbar>  
               </div>

               <Switch>
           <Route path="/writepost">
            <Writepost />
          </Route>
          <Route path="/information">
            <Information />
          </Route>
          <Route path="/devices">
            <Devices />
          </Route>
          <Route path="/company">
            <Company />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>

               </Router>
          );
     }

}