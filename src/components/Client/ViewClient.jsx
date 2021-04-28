import React,{useEffect,useState} from 'react';

import axios from 'axios';
import Clients from './Clients';
import Sidebar from '../sidebar';
const ViewClient = () => {

    const [listClient,setClient] = useState([]);

    const getClient = async() =>{
        const headers = {
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc1YjZlOGU1YjM0NjAwMTU2MGYxM2MiLCJFbWFpbElkIjoiYW51YmhhdjEyM0BnbWFpbC5jb20iLCJOYW1lIjoiQU5VQkhBViIsIlVzZXJUeXBlIjoiRW1wbG95ZWUiLCJpYXQiOjE2MTg0MTc0MDZ9.-azhDbZtsP8zjZMNYyCwzg2tEBzoYs74dLRH2gnq54c'
        };
       const response = await  axios.get('https://monaalcreationbackend.herokuapp.com/home/getClients', { headers });
       console.log(response.data);
       setClient(response.data);
       console.log(listClient);
      
    }

    useEffect(getClient,[]);
    console.log(listClient);


    return(
        <div className="right_of_sidebar ViewClient">

            <Sidebar/>

            <div className="right_of_sidebar_list Clients">
            
            {/* <h1 onClick={getClient} >Hlo</h1> */}
            { listClient.map(item =>(
                <Clients Type={item.Type} FirmName={item.FirmName} ContactPerson = {item.NameofPerson} Phone={item.Contact[0].Phone} 
                City={item.Address[0].City}   GSTIN={item.GSTIN} />
            ))}
            </div>

        </div>
        
       
    )
}

export default ViewClient;