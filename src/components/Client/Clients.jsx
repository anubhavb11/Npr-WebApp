import React from 'react';
const  Clientinfo  = ({Type, FirmName, ContactPerson,Phone,City,GSTIN}) =>{
    
    console.log('hii',Type);
    return(

        <div className="Clients">
            

                        <div className='Clientinfo-list'>
                        <ul>
                                    <li>Type: {Type}</li>
                                    <li>FirmName: {FirmName}</li>
                                    <li>ContactPerson: {ContactPerson}</li>
                                    <li>Phone: {Phone}</li>
                                    <li>City: {City}</li>
                                    <li>GSTIN: {GSTIN}</li>
                                   
                                </ul>
                           
                    
                        </div>
                        
       
        </div>
    )
}
export default Clientinfo