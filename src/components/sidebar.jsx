import { ProSidebar, SidebarHeader, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {Redirect, Link} from 'react-router-dom'
import React ,{useState}from 'react';

const Sidebar = (props) =>{


  // VERIFICATION
  const data = window.localStorage.getItem('token');
  // console.log(props)
  // const data1 = data.json();
  
  if(data == null){

    return  <Redirect to="/login" />
  }


  // Prevent sidebar on login page
  // const {pathname} = props.location;
  // console.log(pathname);
  // if(pathname === "/login") {
  //   return null;
  // }


    return (
<ProSidebar className="pro-sidebar">

<SidebarHeader className='pro-sidebar-header'>
    <h3>Monaal Creation</h3>
  </SidebarHeader>
  <Menu className="pro-sidebar-menu" iconShape="square" popperArrow='true'>
    <SubMenu className="pro-sidebar-sub-menu" title="Inventory" >
      <div className="m1">
        
        
        <MenuItem>
        <Link to='/viewInventory'/>
        View Inventory
       
        </MenuItem>
        
      </div>
     
      <div className="m2">
       
        <MenuItem>
        <Link to='/viewSummary'/>
        View Summary
        
        </MenuItem>
      

      </div>
     
     
     
    </SubMenu>
    <SubMenu className="pro-sidebar-sub-menu" title="Sales/Out Challan" >
      <MenuItem>Component 1</MenuItem>
      <Link to='/VerifyChallans'>
      <MenuItem>Verify Challans</MenuItem>
      </Link>
    </SubMenu>
    <SubMenu className="pro-sidebar-sub-menu" title="Components" >
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
    <SubMenu className="pro-sidebar-sub-menu" title="Components" >
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>

    <SubMenu className="pro-sidebar-sub-menu" title="Components" >
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
    <SubMenu className="pro-sidebar-sub-menu" title="Components" >
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar>
    )
}
export default Sidebar