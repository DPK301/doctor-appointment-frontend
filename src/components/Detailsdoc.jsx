
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Availableday from './Availableday';
import Review from './Review';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Detailsdoc() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [docDetails,setDocdetails]= useState([]);

  const {id} = useParams();
  console.log(id);
  const base_url='https://doctor-appointment-backend-k5sl.onrender.com/doctors'

  const fetch=async()=>{
    const result = await axios.get(`${base_url}/${id}`)
 console.log(result.data);
    setDocdetails(result.data) }


console.log(docDetails);


  useEffect(()=>{fetch()},[]);
  return (
    <div>


      <div className='p-3'>


       <div className='shadow' style={{width:'100%',height:'500px',display:'flex'}}>
            <div style={{width:'700px',position:'relative',top:'150px',left:'100px'}}>
            <h1 style={{fontSize:'70px'}}>{docDetails.name}</h1>
        <div style={{height:'3px',width:'100%',backgroundColor:'black'}}>.</div>
        <span style={{opacity:'75%',fontSize:'50px'}}>{docDetails.specialty}</span> <span style={{fontSize:'30px'}} className='ms-3 '> {docDetails.rating}<i style={{color:'yellow'}} class="fa-solid fa-star"></i> </span> <br />
        
        <Button variant="outline-primary" onClick={handleShow}>
        Take Appointment
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Details :</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <hr />
           To take appointment please dail on the number given below <br />
           Ph.No : <span style={{color:'blue'}}>{docDetails.phone}</span> <br />
           OR
           <br />
           please send a mail with details about appointment <br />
           To <span style={{color:'blue'}}> <a href="/">{docDetails.email}</a></span> <br />
           and then we will contact you to tell about whether that slot is available or not.<br />
           <hr />
        </Offcanvas.Body>
      </Offcanvas>
            </div>
            <div style={{width:'300px',position:'absolute',top:'150px',left:'870px',zIndex:'-1'}} >
              <img style={{width:'300px'}} src="https://th.bing.com/th/id/R.4f60305f48b01e05db6b53083abf71dd?rik=nHmj%2bppl2tjuKw&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fMcL%2fMLa%2fMcLMLagxi.png&ehk=8s%2fMhTOP83Ynj1Q89A2Owxbb5CXjLy5tXA3PHNUrrtE%3d&risl=&pid=ImgRaw&r=0" alt="" />
            </div>
       </div>


        <div className='row mt-3 mx-auto'>
        <div className='col-5 '  style={{paddingLeft:'100px'}}>
          <p style={{fontSize:'25px'}}><i style={{color:'blue'}} class="fa-solid fa-hospital "></i> {docDetails.hospital}</p>
            <p style={{fontSize:'25px'}}> <i style={{color:'blue'}} class="fa-solid fa-location-dot"></i> {docDetails.address}</p>
            <p style={{fontSize:'25px'}}><i style={{color:'blue'}} class="fa-solid fa-phone"></i> {docDetails.phone}</p>
            <p style={{fontSize:'25px'}}><i style={{color:'blue'}} class="fa-solid fa-envelope"></i> {docDetails.email}</p>
            </div>
            <div className='col pt-5' style={{backgroundColor:'lightblue'}}>
               <Availableday available={docDetails.available_days} />
              <p className='mt-3' style={{color:'white'}}> Available Hour : <b>{docDetails.available_hours}</b></p>
            </div>
        </div>
       
       <div className='mt-3'>
         <Review reviewdata={docDetails.reviews}/>
       </div>

      </div>

    </div>
  )
}

export default Detailsdoc