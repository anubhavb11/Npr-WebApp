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
  
    
    const [ChallanItem,setChallanItem] = useState(null);
    const [totalMeterage, setTotalMeterage] = useState(0);


    useEffect(()=>{
        setChallanItem(props.item)
    },[]);

    const getMeterageSum = async() =>{
        if (ChallanItem){
            var total = 0; 
            for await (let particular of ChallanItem.Particulars){
                total=total + particular.Meterage;
            }
    
            setTotalMeterage(total);
          
        }

        
    }
  
    useEffect(getMeterageSum,[ChallanItem]);
    console.log(ChallanItem);
  
    
    var count = 1;

    if (!ChallanItem)
        return <></>

    return (
    <div className="right_of_sidebar ViewInventory">
  
      <div className="right_of_sidebar_list InventoryList">
          <br/>
          <div className="total_records" align="center">
            <h4>OUT CHALLAN</h4>
            <h2 style={{color:"red"}}>Monaal Creation</h2>
            <h6>G.F 2819, A Churiya Mohalla</h6>
            <h6>VIII, Tughalkabad, New Delhi 110044</h6>
          </div><br/>
          <div style={{marginLeft:"100px"}}>
            <h5>Date : {ChallanItem.Date}</h5>
            <h5>Challan No : MC21 / {ChallanItem.ChallanNo}</h5>
          </div>
          <hr class="between"/>
          <div style={{marginLeft:"100px"}}>
            <h5>Party : {ChallanItem.Client.FirmName}</h5>
            <h5>Address : {ChallanItem.Client.Address[0].StreetAddress+", "+ChallanItem.Client.Address[0].City+", "+ChallanItem.Client.Address[0].Pincode+", "+ChallanItem.Client.Address[0].State+", ("+ChallanItem.Client.Address[0].Country+")"}</h5>
            <h5>GSTIN : {ChallanItem.Client.GSTIN}</h5>
            <h5>Contact Person : {ChallanItem.Client.NameofPerson}</h5>
          </div>
          <hr class="between"/>
          <div align="center"><h5 style={{color:"blue"}}>Stock/Items</h5></div><br/>
          
            <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Sno</StyledTableCell>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="right">Barcode</StyledTableCell>
                        <StyledTableCell align="right">YRDS</StyledTableCell>   
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      
                    {
                        ChallanItem.Particulars.map((item,key) =>{
                            return  (
                                <StyledTableRow >
                                <StyledTableCell component="th" scope="row">
                                    {count++}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {item.Name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{item.Barcode.Barcode}</StyledTableCell>
                                <StyledTableCell align="right">{item.Meterage}</StyledTableCell>
                                </StyledTableRow>
                            )
                        })
                    }   
                        
                      
                    
                    </TableBody>
                  </Table>
                </TableContainer><br/>
                <div align="center">
                  <h5>Total Pcs: {ChallanItem.Particulars.length}</h5>
                  <h5>Total Mtrs: {totalMeterage}</h5>
                </div><hr class="between"/>
                <div align="center"><h6>Transportation</h6></div>
                <div style={{marginLeft:"100px"}}>
                  <h6>Vehicle Number : {ChallanItem.Vehiclenumber}</h6>
                  <h6>Transporter : {ChallanItem.Transporter}</h6>
                </div><hr class="between"/>
                <div style={{marginLeft:"100px"}}>
                  <h6>Created By : {ChallanItem.Generatedby.Name}</h6>
                  <h6>Date : {ChallanItem.Date}</h6>
                  <h6>Emp ID : {ChallanItem.Generatedby.EmpId}</h6>
                  <h6>Contact Number : {ChallanItem.Generatedby.Phone}</h6>
                </div><hr class="between"/><br/><br/>
                <h6>#This is a computer generated challan hence does not need signatures</h6>
                <div class="float-right" style={{margin:"0 80px 100px 0"}}>
                    <Fab color="primary">
                        </Fab>
                </div>
                 <br/>   
        </div>
    </div>
  
     
    );
  }

export default Item;