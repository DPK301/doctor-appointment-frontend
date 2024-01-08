import React, { useState ,useEffect} from 'react'
import Doccards from './Doccards';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
function Main() {
  const [maindata,setMaindata]=useState([]);
  const base_url = 'https://doctor-appointment-backend-k5sl.onrender.com/doctors';
  const fetchData=async()=>{
    const result = await axios.get(base_url)
    console.log(result);
    setMaindata(result.data)
   }
  console.log(maindata);
   useEffect(()=>{fetchData()},[])
  return (
    <div>
     
      <div style={{height:'390px',backgroundColor:' rgb(202, 242, 255)'}} className='row mx-auto'>
          <div className="col">
            <div style={{marginTop:'100px',marginLeft:'100px'}}>
            <h1 >
              Better Doctors, Better Care.
            </h1>
            <p style={{opacity:'75%'}}>Best Outcome for Every Patient Every Time</p>
            <Button variant="primary">more</Button>
            </div>
          </div>
          <div className="col"><img style={{width:'470px',marginLeft:'90px',marginTop:'50px'}} src="https://www.osplabs.com/wp-content/uploads/2022/08/Prescription-of-Covered-Drugs.png" alt="" /></div>
      </div>
      <div style={{height:'50px',}} className='p-3'><h5>Available Doctors :</h5></div>
      <div className='row mx-auto mb-5'>
      <div style={{display:'flex',justifyContent:'',flexDirection:'row',flexWrap:'wrap',paddingLeft:'30px'}}   className="col-8">
       
      { maindata.map(a=>(  <Doccards doctor={a}/>))} 
        </div>
       
        <div  className="col-4 p-3"><h5 style={{color:'lightblue'}}>Health care</h5>
        <p style={{textAlign:'justify'}}>Health care is the improvement of health via the prevention, diagnosis, treatment, amelioration or cure of disease, illness, injury, and other physical and mental impairments in people. Health care is delivered by health professionals and allied health fields. Medicine, dentistry, pharmacy, midwifery, nursing, optometry, audiology, psychology, occupational therapy, physical therapy, athletic training, and other health professions all constitute health care. The term includes work done in providing primary care, secondary care, and tertiary care, as well as in public health. Access to healthcare may vary across countries, communities, and individuals, influenced by social and economic conditions as well as health policies</p>
        </div>
      </div>
    </div>
  )
}

export default Main