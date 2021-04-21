
import React from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import SignIn from './components/Login'
import Header from './components/header'
import Sidebar from './components/sidebar'
// import './custom.scss'
import ViewInventory from './components/ViewInventory'
export default class App extends React.Component {
  render(){
    return(
      <Router>
         <div className="App">
          {/* <Header/> */}
          {/* <NavBar/>  */}

          <Sidebar/>
          <Route path='/' exact component={SignIn} />
          <Route path='/viewInventory' component={ViewInventory} />
       </div>
   
        
      </Router>
     
    )
  }
}