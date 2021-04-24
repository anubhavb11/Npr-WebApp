import React , {useState, useEffect} from 'react';
import axios from 'axios';
// import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './sidebar' ;
import { withStyles,makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

export default function ViewSummary() {
  const classes = useStyles();


  
  const [listSummary,setSummary] = useState([]);
  const [totalRecords, settotalRecords] = useState([]);


  const findTotal = (data) =>{
    const total ={
      totalmeters: 0,
      totalKg: 0,
      totalYards: 0,
      totalNos: 0
    };
    data.forEach(element => {
      total.totalmeters += element.Meterage;
      total.totalNos += element.Nos;
      
    });
    console.log(total);
    return total;
  }

  const getSummary = async() =>{
      const headers = {
          'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc1YjZlOGU1YjM0NjAwMTU2MGYxM2MiLCJFbWFpbElkIjoiYW51YmhhdjEyM0BnbWFpbC5jb20iLCJOYW1lIjoiQU5VQkhBViIsIlVzZXJUeXBlIjoiRW1wbG95ZWUiLCJpYXQiOjE2MTg0MTc0MDZ9.-azhDbZtsP8zjZMNYyCwzg2tEBzoYs74dLRH2gnq54c'
      };
     const response = await  axios.get('https://monaalcreationbackend.herokuapp.com/home/getinventorylocation/all', { headers });
     console.log(response.data);
     setSummary(response.data);
    //  let record ={};
    const total = findTotal(response.data);
    settotalRecords(total);

    
    
  }

  useEffect(getSummary,[]);
  console.log(listSummary);



  return (
  <div className="right_of_sidebar ViewInventory">

    <Sidebar/>

    <div className="right_of_sidebar_list InventoryList">
      <div className="total_records">
        <h5>Total Meeters: {totalRecords.totalmeters}</h5>
        <h5>Total KGS: {totalRecords.totalKg}</h5>
        <h5>Total YRDS: {totalRecords.totalYards}</h5>
        <h5>Total Nos: {totalRecords.totalNos}</h5>

      </div>
      
        <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell align="right">Qty</StyledTableCell>
                    <StyledTableCell align="right">Nos</StyledTableCell>   
                  </TableRow>
                </TableHead>
                <TableBody>
                  {listSummary.map((row) => (
                    <StyledTableRow key={row._id}>
                      <StyledTableCell component="th" scope="row">
                        {row.Name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.Meterage}</StyledTableCell>
                      <StyledTableCell align="right">{row.Nos}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
    </div>
  </div>

   
  );
}
