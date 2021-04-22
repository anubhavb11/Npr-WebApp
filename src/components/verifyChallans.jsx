import React,{useEffect,useState} from 'react';

import axios from 'axios';
import Item from './challanItem';
import Sidebar from './sidebar';
const VerifyChallans = () => {

    const [challanList,setChallan] = useState([]);

    const getChallan = async() =>{
        const headers = {
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc1YjZlOGU1YjM0NjAwMTU2MGYxM2MiLCJFbWFpbElkIjoiYW51YmhhdjEyM0BnbWFpbC5jb20iLCJOYW1lIjoiQU5VQkhBViIsIlVzZXJUeXBlIjoiRW1wbG95ZWUiLCJpYXQiOjE2MTg0MTc0MDZ9.-azhDbZtsP8zjZMNYyCwzg2tEBzoYs74dLRH2gnq54c'
        };
       const response = await  axios.get('https://monaalcreationbackend.herokuapp.com/home/getchallan?Type=Out&Verified=1', { headers });
       console.log(response.data);
       setChallan(response.data);
       console.log(challanList);
      
    }

    useEffect(getChallan,[])

    return(
        <div className="verifyChallans">

            <Sidebar/>

            <div className="challanList">
            
            {/* <h1 onClick={getChallan} >Hlo</h1> */}
            { challanList.map(item =>(
                <Item challanNo={item.challanNo} challanDate={item.Date} TypeOfchallan={item.Typeofchallan} Party={item.FirmName} 
                /*Design={item.Design}   HSN={item.HSN}  Fabric={item.Fabric}  Print={item.Print}  Color={item.Color}  QTYinStock={item.Meterage} Make={item.Make}  
                Remark={item.Remarks}  BillNo={item.Bill[0].BillNumber}  BillDate={item.Bill[0].BillDate}  OrderDate={item.Bill[0].OrderDate} BiltyNo={item.Bill[0].Bilty} Rate={item.Bill[0].CostPricePerUnit}  
                InChlaanNo={item.Challan[0].ChallanNo}  ChallanDate={item.Challan[0].Date}  Transporter={item.Challan[0].Transporter}  VcNo={item.Challan[0].Vehiclenumber}  GenratedBy={item.Challan[0].Generatedby.Name}*/
                />
            ))}
            </div>

        </div>
        
       
    )
}

export default VerifyChallans;