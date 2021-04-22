
import React from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from './components/Login'
import Sidebar from './components/sidebar'
import Dashboard from './components/dashbord'
import  ViewSummary from './components/ViewSummary'
// import './custom.scss'
import ViewInventory from './components/ViewInventory'
export default class App extends React.Component {
  render(){
    return(
      <Router>
         <div className="App">
         
          <Route path='/' exact  component={Sidebar} />
          <Route path='/' exact component={Dashboard} />
          <Route path='/login'   component={LogIn} />
          <Route path='/viewInventory' component={ViewInventory} />
          <Route path='/viewSummary' component={ViewSummary} />
        

       </div>

      </Router>
     
    )
  }
}