import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Rating from '@mui/material/Rating';
function Review({ reviewdata}) {
    console.log( reviewdata);
  return (
    <div>
          <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header> <b>REVIEWS : </b>
        </Accordion.Header>
        <Accordion.Body>
         <div>
            {reviewdata?.map(a=>(
            <div>
                <div className='m-1 card border-0 shadow p-3'>
                <Row >
                    <Col className='col-2'>{a.patient_name}</Col>
                    <Col className='col-10'><p style={{textAlign:'justify'}}>{a.comments}</p>
                    <Rating name="half-rating" defaultValue={a.rating} precision={0.1} />
                                               <p style={{opacity:'75%'}}>{a.date}</p> </Col>
                </Row>
            </div>
            </div>
            ))}
         </div>
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>
    </div>
  )
}

export default Review