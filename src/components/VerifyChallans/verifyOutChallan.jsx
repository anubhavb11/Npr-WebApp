import React , {useState, useEffect} from 'react';
import axios from 'axios';
import sidebar from '../sidebar'
import Item from './outChallanItem';

// import { makeStyles } from '@material-ui/core/styles';
//import Item from './SummaryItem' ;
import Sidebar from '../sidebar' ;


export default function VerifyOutChallan(props) {
    const [outChallanList,setOutChallan] = useState([]);
    //const [totalRecords, settotalRecords] = useState([]);
  
  
    const getOutChallan = async() =>{
        const headers = {
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc1YjZlOGU1YjM0NjAwMTU2MGYxM2MiLCJFbWFpbElkIjoiYW51YmhhdjEyM0BnbWFpbC5jb20iLCJOYW1lIjoiQU5VQkhBViIsIlVzZXJUeXBlIjoiRW1wbG95ZWUiLCJpYXQiOjE2MTg0MTc0MDZ9.-azhDbZtsP8zjZMNYyCwzg2tEBzoYs74dLRH2gnq54c'
        };
       const response = await  axios.get('https://monaalcreationbackend.herokuapp.com/home/getchallan?Type=Out&Verified=0', { headers });
       console.log(response.data);
       setOutChallan(response.data);
    }
  
    useEffect(getOutChallan,[]);
    console.log(outChallanList);
    console.log(props);
    
    return (

        <div className="right_of_sidebar VerifyOutChallan">
            <Sidebar/>
        
        
            <div className="right_of_sidebar_list OutChallanList">
            {/* <h1 onClick={getOutChallan} >Hlo</h1> */}
                  
                {
                    outChallanList.map((item) =>{
    
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