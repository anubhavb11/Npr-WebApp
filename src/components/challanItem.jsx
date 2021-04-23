import React from 'react';
import {Accordion,Card,Button }from 'react-bootstrap';

const  Item  = ({challanNo,challanDate,Typeofchallan,Party }) =>{
    console.log(challanNo,challanDate,Typeofchallan,Party);
    
    return(
        <div className="challanItem">
            <Accordion>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle  as={Card.Header}    variant="link" eventKey="0">
                      
                    <div className='challan-item-list'>
                            <div className="challan-item-list-info">
                                <div className="challan-item-challanNo">
                                challanNo:  {challanNo}
                                </div>
                                <div className="challan-item-challanDate">
                                challanDate:  {challanDate}
                                </div>
                                <div className="challan-item-Typofchallan">
                                Typeofchallan:  {Typeofchallan}
                                </div>
                                <div className="challan-item-Party">
                                Party:  {Party}
                                </div>
                            </div>
                           
                    
                    </div>
                        
                    </Accordion.Toggle>
                    </Card.Header>
                </Card>  
            </Accordion>
    
        </div>

    )
}


export default Item