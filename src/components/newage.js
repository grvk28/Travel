import React from 'react'
import Map from '../images/map.jpeg'

const NewAge = () => {
  return (
    <div className='RowW100'>
        <div className='RowW50'>
            <img src={Map} height='500px' width='800px'/>
        </div>
        <div className='ColW20' style={{textAlign:'right',marginLeft:'10vw',alignItems:'right'}}>
        <div style={{fontSize:'105px',marginLeft:'-3vw'}}>05.</div>
            <div style={{fontSize:'40px'}}> New Age Destination Management</div>
            <div className='Pline' style={{marginTop:'0px', position:'relative', left:'7vw', top:'20px'}}></div>
            <div className='ColW50' style={{fontSize:'10px',marginTop:'40px', width:'15vw', marginLeft:'0px',right:'-40px', top:'20px'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
            </div>
        </div>
    </div>
  )
}

export default NewAge