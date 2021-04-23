import React,{useEffect,useState} from 'react';

import axios from 'axios';
import Item from './ChallanItem';
import Sidebar from './sidebar';
const VerifyChallans = () => {

    const [listChallan,setChallan] = useState([]);

    const getChallan = async() =>{
        const headers = {
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc1YjZlOGU1YjM0NjAwMTU2MGYxM2MiLCJFbWFpbElkIjoiYW51YmhhdjEyM0BnbWFpbC5jb20iLCJOYW1lIjoiQU5VQkhBViIsIlVzZXJUeXBlIjoiRW1wbG95ZWUiLCJpYXQiOjE2MTg0MTc0MDZ9.-azhDbZtsP8zjZMNYyCwzg2tEBzoYs74dLRH2gnq54c'
        };
       const response = await  axios.get('https://monaalcreationbackend.herokuapp.com/home/getchallan?Type=Out&Verified=0', { headers });
       console.log(response.data);
       setChallan(response.data);
       console.log(listChallan);
      
    }

    useEffect(getChallan,[])

    return(
        <div className="VerifyChallans">

            <Sidebar/>

            <div className="ChallanList">
            
            {/* <h1 onClick={getChallan} >Hlo</h1> */}
            {listChallan.map(item =>(
                <Item ChallanNo={item.ChallanNo} Date={item.Date} Typeofchallan={item.Typeofchallan} Party={item.Client.FirmName}/>
            ))}
            </div>

        </div>
        
       
    )
}

export default VerifyChallans;