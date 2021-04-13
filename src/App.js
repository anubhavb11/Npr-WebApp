
import React from 'react';
// import './App.css';
import {Navbar,Nav,Form,FormControl,Button }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import SignIn from './components/Login'

export default class App extends React.Component {
  render(){
    return(
      <div>
          <NavBar/> 
    <SignIn/>

       </div>
   
    )
  }
}