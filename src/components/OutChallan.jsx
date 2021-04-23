import React , {useState, useEffect} from 'react';
import axios from 'axios';
// import { makeStyles } from '@material-ui/core/styles';
import Item from './challanItem' ;
import Sidebar from './sidebar' ;
import { withStyles,makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const OutChallan = () => {

    const [outChallan,setChallan] = useState([]);

    const getChallan = async() =>{
        const headers = {
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc1YjZlOGU1YjM0NjAwMTU2MGYxM2MiLCJFbWFpbElkIjoiYW51YmhhdjEyM0BnbWFpbC5jb20iLCJOYW1lIjoiQU5VQkhBViIsIlVzZXJUeXBlIjoiRW1wbG95ZWUiLCJpYXQiOjE2MTg0MTc0MDZ9.-azhDbZtsP8zjZMNYyCwzg2tEBzoYs74dLRH2gnq54c'
        };
       const response = await  axios.get('https://monaalcreationbackend.herokuapp.com/home/getchallan?Type=Out&Verified=0', { headers });
       console.log(response.data);
       setChallan(response.data);
       console.log(outChallan);
    }

    useEffect(getChallan,[]);

    return(
        <div className="OutChallan">

            <Sidebar/>

            <div className="ChallanOut">
            
            {/* <h1 onClick={getChallan} >Hlo</h1> */}
            {listChallan.map(item =>(
                <Item ChallanNo={item.ChallanNo} Date={item.Date} Typeofchallan={item.Typeofchallan} Party={item.Client.FirmName}
                Address={item.Address} GSTIN={item.GSTIN} ContactPerson={item.NameOfPerson}/>
            ))}
            </div>

        </div>
        
       
    )
}

export default OutChallan;