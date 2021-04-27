import React from 'react';
import {Accordion,Card,Button }from 'react-bootstrap';
import { Link } from 'react-router-dom';

const  Item  = ({ChallanId,ChallanNo,Date,Typeofchallan,Party }) =>{

    console.log('ChallanNo');
    return(
        <div className="challanItem">
            <Accordion>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle  as={Card.Header}    variant="link" eventKey="0">

                        <div className='inventory-item-list'>

                            <div className="inventory-item-list-info">
                                <div className="challan-item-challanno">
                                Challan No:  {ChallanNo}
                                </div>
                                <div className="challan-item-date">
                                Challan Date:  {Date}
                                </div>
                                <div className="challan-item-toc">
                                Type of challan:  {Typeofchallan}
                                </div>
                                <div className="challan-item-party">
                                Party:  {Party}
                                </div>
                            </div>


                        </div>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Link to={{pathname:"/viewOutChallan",state:{ChallanId:ChallanId}}} >
                                <b>Go to OUT CHALLAN</b>
                            </Link>
                        </Card.Body>
                    </Accordion.Collapse>

                </Card>

            </Accordion>


        </div>
    )
}

export default Item ;