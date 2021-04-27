import React from 'react';
import {Accordion,Card,Button }from 'react-bootstrap';
import { Link } from 'react-router-dom';

const  Item  = ({ChallanId,ChallanNo,Date,Typeofchallan,Party  }) =>{
    console.log(ChallanId,ChallanNo,Date,Typeofchallan,Party );
          
    return(
        <div className="challanItem">
            <Accordion>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle  as={Card.Header}    variant="link" eventKey="0">

                        <div className='challan-item-list'>
                            
                            <div className="challan-item-list-info">
                                <div className="challan-item-ChallanNo">
                                Challan No:  {ChallanNo}
                                </div>
                                <div className="challan-item-ChallanDate">
                                Challan Date:  {Date}
                                </div>
                                <div className="challan-item-Typeofchallan">
                                Type of challan:  {Typeofchallan}
                                </div>
                                <div className="challan-item-Party">
                                Party:  {Party}
                                </div>
                            </div>
                        </div>

                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    <Link to={{pathname:"/verifyOutChallan",state:{ChallanId:ChallanId}}} >
                                <b>Go to Out Challan</b>
                            </Link>
                
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>  
            </Accordion>
    
        </div>
        
       
    )
}

export default Item