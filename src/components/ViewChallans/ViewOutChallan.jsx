
import React , {useState, useEffect} from 'react';
import axios from 'axios';

import Item from './VerifiedOutChallan';

// import { makeStyles } from '@material-ui/core/styles';
//import Item from './SummaryItem' ;
import Sidebar from '../sidebar' ;


export default function ViewOutChallan(props) {
 
  const [listOutChallan,setOutChallan] = useState([]);
  //const [totalRecords, settotalRecords] = useState([]);


  const getOutChallan = async() =>{
      const headers = {
          'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc1YjZlOGU1YjM0NjAwMTU2MGYxM2MiLCJFbWFpbElkIjoiYW51YmhhdjEyM0BnbWFpbC5jb20iLCJOYW1lIjoiQU5VQkhBViIsIlVzZXJUeXBlIjoiRW1wbG95ZWUiLCJpYXQiOjE2MTg0MTc0MDZ9.-azhDbZtsP8zjZMNYyCwzg2tEBzoYs74dLRH2gnq54c'
      };
     const response = await  axios.get('https://monaalcreationbackend.herokuapp.com/home/getchallan?Type=Out&Verified=1', { headers });
     console.log(response.data);
     setOutChallan(response.data);
    //  let record ={};
    //const total = findTotal(response.data);
    //settotalRecords(total);
    
  }

  useEffect(getOutChallan,[]);
  console.log(listOutChallan);
  console.log(props);
  


  return (

    <div className="right_of_sidebar ViewInventory">

    <Sidebar/>
    
        <div className="right_of_sidebar_list ChallanList">
        {/* <h1 onClick={getOutChallan} >Hlo</h1> */}
              
            {
                listOutChallan.map((item) =>{

                    if (props.ChallanId==item._id) 
                        return  (
                            <Item item={item} />
                        )
                })
            }              

        </div>
        
    </div>
  );
}