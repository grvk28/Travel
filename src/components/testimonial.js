import React from 'react'
import Andesh from './andesh'
import Girl from '../images/girl.jpeg'

const Testimonial = () => {
  return (
    <div className='RowW100' style={{textAlign:'right'}}>
        <div className='ColW30' style={{paddingLeft:'0px'}}>
            <div>
            <div className='rel' style={{fontSize:'50px', left:'-140px'}}>Testimonials</div>
            <div className='Pline' style={{marginLeft:'27vw'}}></div>
            <div className='ColW50' style={{fontSize:'10px',marginTop:'0px', width:'15vw', marginLeft:'0px',right:'-200px', top:'20px'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
            </div>
            </div>
            <div>
            <div className='rel' style={{left:'-150px', marginTop:'40px'}}><img src={Girl}  height='290px' width='570px' style={{borderRadius:'0px 30px 30px 0px'}}/></div>
            </div>
        </div>
        <div className='ColW20' style={{marginLeft:'60px'}}>
            <Andesh/>
            <Andesh/>
        </div>
        <div className='ColW20'>
            <Andesh/>
            <Andesh/>
        </div>
    </div>
  )
}

export default Testimonial