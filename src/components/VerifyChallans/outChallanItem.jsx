import React , {useState, useEffect} from 'react';
import axios from 'axios';
// import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../sidebar' ;
import { withStyles,makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  
  const useStyles = makeStyles({
    table: {
      minWidth: 100,
    },
  });  
 
  const Item=(props)=> {
    
    const classes = useStyles();  
    
    const [challanItem,setChallanItem] = useState(null);
    const [totalMeterage, setTotalMeterage] = useState(0);

    useEffect(()=>{
        setChallanItem(props.item)
    },[]);

    const getMeterageSum = async() =>{
        if (challanItem){
            var total = 0; 
            for await (let particular of challanItem.Particulars){
                total=total + particular.Meterage;
            }
    
            setTotalMeterage(total);
          
        }        
    }
  
    useEffect(getMeterageSum,[challanItem]);
    console.log(challanItem);
   
    var count = 1;

    if (!challanItem)
        return <></>

    return (
        <div className="right_of_sidebar ViewInventory">
  
        <div className="right_of_sidebar_list InventoryList">
            <br/>
            <div className="total_records" align="center">
              <h5><b>OUT CHALLAN</b></h5>
              <h3 class="heading">Monaal Creation</h3>
              <h6>G.F 2819, A Churiya Mohalla</h6>
              <h6>VIII, Tughalkabad, New Delhi 110044</h6>
            </div><br/>
              <h6 class="date">Date : {challanItem.Date} &emsp;Challan No : MC21 / {challanItem.ChallanNo}</h6>                  
            <hr class="between"/>
            <div style={{marginLeft:"100px"}}>
              <h6>Party : {challanItem.Client.FirmName}</h6>
              <h6>Address : {challanItem.Client.Address[0].StreetAddress+", "+challanItem.Client.Address[0].City+", "+challanItem.Client.Address[0].Pincode+", "+challanItem.Client.Address[0].State+", ("+challanItem.Client.Address[0].Country+")"}</h6>
              <h6>GSTIN : {challanItem.Client.GSTIN}</h6>
              <h6>Contact Person : {challanItem.Client.NameofPerson}</h6>
              </div>
            <hr class="between"/>
            <div align="center"><h5 style={{color:"rgb(6, 181, 250)"}}><b>Stock/Items</b></h5></div><br/>
            
              <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>Sno</StyledTableCell>
                          <StyledTableCell>Name</StyledTableCell>
                          <StyledTableCell align="center">Barcode</StyledTableCell>
                          <StyledTableCell align="center">MTRS</StyledTableCell>   
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        
                      {challanItem.Particulars.map((item,key) =>{
                              return (
                                  <StyledTableRow >
                                  <StyledTableCell component="th" scope="row">
                                      {count++}
                                  </StyledTableCell>
                                  <StyledTableCell component="th" scope="row">
                                      {item.Name}
                                  </StyledTableCell>
                                  <StyledTableCell align="center">{item.Barcode.Barcode}</StyledTableCell>
                                  <StyledTableCell align="center">{item.Meterage}</StyledTableCell>
                                  </StyledTableRow>
                              )
                          })
                      }   
                    </TableBody>
                  </Table>
                  </TableContainer>
                  <br/>
                  <div align="center">
                    <h5>Total Pcs: {challanItem.Particulars.length}</h5>
                    <h5>Total Mtrs: {totalMeterage}</h5>
                  </div><hr class="between"/>
                  <div align="center"><h6>Transportation</h6></div>
                  <div style={{marginLeft:"100px"}}>
                    <h6>Vehicle Number : {challanItem.Vehiclenumber}</h6>
                    <h6>Transporter : {challanItem.Transporter}</h6>
                  </div><hr class="between"/>
                  <div style={{marginLeft:"100px"}}>
                    <h6>Created By : {challanItem.Generatedby.Name}</h6>
                    <h6>Date : {challanItem.Date}</h6>
                    <h6>Emp ID : {challanItem.Generatedby.EmpId}</h6>
                    <h6>Contact Number : {challanItem.Generatedby.Phone}</h6>
                  </div><hr class="between"/><br/><br/>
                  <h6>#This is a computer generated challan hence does not need signatures</h6>
                  <div class="float-right" style={{margin:"0 80px 100px 0"}}>
                  <Fab color="primary"></Fab>
                  </div>
                <br/>   
          </div>
      </div>
          
    );
  }

export default Item;