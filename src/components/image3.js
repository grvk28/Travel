import React from 'react'
import Mt from '../images/redIceMt.webp'

const Image3 = (props) => {
  return (
    <div>
        <div><img src={Mt} height={props.height} width={props.width} style={{borderRadius:'10px'}}/></div>
        <div className='ImageDes'>{props.title}</div>
    </div>
  )
}

export default Image3