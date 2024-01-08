import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';


function Header() {
  return (
    <div> 
       <MDBNavbar light  style={{backgroundColor:'lightblue'}} className='shadow'>
        <MDBContainer fluid>
          <MDBNavbarBrand tag="span" className='mb-0 h1' style={{fontSize:'30px',color:'white'}}><b>HEALTH.COM</b></MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
   </div>
  )
}

export default Header