import { ProSidebar, SidebarHeader, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {Link} from 'react-router-dom'

const Sidebar = () =>{

    return (
<ProSidebar className="pro-sidebar">

<SidebarHeader className='pro-sidebar-header'>
    <h3>Monaal Creation</h3>
  </SidebarHeader>
  <Menu className="pro-sidebar-menu" iconShape="square" popperArrow='true'>
    <SubMenu className="pro-sidebar-sub-menu" title="Inventory" >
      <Link to='/viewInventory'>
      <MenuItem>View Inventory</MenuItem>
      </Link>
     
      <MenuItem>View Summary</MenuItem>
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
    <SubMenu className="pro-sidebar-sub-menu" title="Components" >
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar>
    )
}
export default Sidebar