import React from 'react'
import Man from '../images/man.jpeg'

const Andesh = () => {
  return (
    <div>
            <div>
            <div>
                <img src={Man} height='80px' width='80px' style={{borderRadius:'50%', position:'relative'}} />
            </div>
            <h5>ANDESH MEHTA</h5>
            <div className='Pline' style={{marginLeft:'20vw'}}></div>
            <div className='ColW50' style={{fontSize:'10px',marginTop:'0px', width:'15vw', paddingRight:'0px',right:'-7vw', top:'0px'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
            </div>
    </div>
    </div>

  )
}

export default Andesh