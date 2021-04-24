import React from 'react';
import {Accordion,Card,Button }from 'react-bootstrap';

const  Item  = ({ChallanNo,ChallanDate,Typeofchallan,Party,Address,GSTIN,ContactPerson  }) =>{
    console.log(ChallanNo,ChallanDate,Typeofchallan,Party,Address,GSTIN,ContactPerson );
          
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
                                Challan Date:  {ChallanDate}
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
                        <div className="out_challan_details">
                            <div className="out_challan_details_1 out_challan_details_info ">
                                <center>
                                    <h5>OUT CHALLAN</h5>
                                    <h3 class="heading">Monaal Creation</h3>
                                    <p>G,F 2819,A Churiya Mohalla Vill, Tughalkabad, New Delhi-110044</p>
                                    <p>Date: {ChallanDate} &nbsp;&nbsp;&nbsp;&nbsp; Challan No.: {ChallanNo}</p>
                                </center>
                                <hr class="between" />

                            <div className="out_challan_details_2 out_challan_details">
                              <dl>
                                <dt>&emsp;&emsp;&emsp;&emsp;&emsp; Party: {Party}</dt>
                                <dt>&emsp;&emsp;&emsp;&emsp;&emsp; Address: {Address}</dt>
                                <dt>&emsp;&emsp;&emsp;&emsp;&emsp; GSTIN: {GSTIN}</dt>
                                <dt>&emsp;&emsp;&emsp;&emsp;&emsp; Contact Person: {ContactPerson}</dt>
                             </dl>
                             <hr class="between" />
                            </div>
                            </div>


                        </div>
                
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>  
            </Accordion>
    
        </div>
        
       
    )
}

export default Item