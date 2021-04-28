import React,{useEffect,useState} from 'react';

import axios from 'axios';
import Item from './challanItem';
import Sidebar from '../sidebar';

const VerifyChallans = () => {

    const [challanList,setChallan] = useState([]);

    const getChallan = async() =>{
        const headers = {
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc1YjZlOGU1YjM0NjAwMTU2MGYxM2MiLCJFbWFpbElkIjoiYW51YmhhdjEyM0BnbWFpbC5jb20iLCJOYW1lIjoiQU5VQkhBViIsIlVzZXJUeXBlIjoiRW1wbG95ZWUiLCJpYXQiOjE2MTg0MTc0MDZ9.-azhDbZtsP8zjZMNYyCwzg2tEBzoYs74dLRH2gnq54c'
        };
       const response = await  axios.get('https://monaalcreationbackend.herokuapp.com/home/getchallan?Type=Out&Verified=0', { headers });
       console.log(response.data);
       setChallan(response.data);
       console.log(challanList);
      
    }

    useEffect(getChallan,[]);

    return(
    
        <div className="right_of_sidebar verifyChallans">

            <Sidebar/>

            <div className="right_of_sidebar_list challanList">
            
            {/* <h1 onClick={getChallan} >Hlo</h1> */}
            { challanList.map(item =>(
                <Item ChallanId={item._id} ChallanNo={item.ChallanNo} Date={item.Date} Typeofchallan={item.Typeofchallan} Party={item.Client.FirmName}/>
            ))}
            </div>

        </div>
        
       
    )
}

export default VerifyChallans;