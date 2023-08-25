import React from 'react'
import Mt from '../images/redIceMt.webp'

const Image2 = (props) => {
  return (
    <div>
        <div><img src={Mt} height='300px' width='220px' style={{borderRadius:'30px'}}/></div>
        <div className='Child' style={{position:'relative',left:'40px',top:'-150px',zIndex:'1'}}>
            <div className='Wline2'></div>
            <div className='ColW20' style={{fontSize:'12px', width:'150px', marginLeft:'-20px'}} >
            Journeys that can't be beat
            </div>
            <div style={{fontSize:'20px', width:'40px'}}>{props.title}</div>
        </div>
    </div>
  )
}

export default Image2