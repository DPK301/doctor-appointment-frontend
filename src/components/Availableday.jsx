import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
function Availableday( {available}) {
    console.log(available);
  return (
    <div>
         <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header> <b>Available Days</b>
        </Accordion.Header>
        <Accordion.Body>
         <div>
            {available?.map(a=>(<div>{a}</div>))}
         </div>
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>
    </div>
  )
}

export default Availableday