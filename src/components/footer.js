import React from 'react'
import HiTours from '../images/HiTours.jpeg'

const Footer = () => {
  return (
    <div className='RowW100' style={{backgroundColor:'gray'}}>
        <img src={HiTours} height='90px' width='90px' style={{position:'relative',left:'45%'}}/>
    </div>
  )
}

export default Footer