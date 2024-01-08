import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Doccards({doctor}) {
  console.log(doctor);
  return (
    <div >
     <Link to={`detail/${doctor.id}`}>
     <MDBCard alignment='center m-1 ' style={{width:'250px'}}>
        <MDBCardBody>
          <MDBCardTitle>{doctor.name}</MDBCardTitle>
          <hr />
          <MDBCardText>{doctor. specialty}</MDBCardText>
         
        </MDBCardBody>
      </MDBCard>
     </Link>
    </div>
  )
}

export default Doccards