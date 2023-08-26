import React from 'react'
import HiTours from '../images/HiTours.jpeg'

const Footer = () => {
  return (
    <div className='RowW100' style={{backgroundColor:'lightgray', padding:'20px'}}>
        <img src={HiTours} height='150px' width='150px' style={{position:'relative',left:'45%'}}/>
    </div>
  )
}

export default Footer