import React from 'react'
import Lorem from './lorem'
import Knowmore from './knowmore'
import Hima from '../images/Hima.jpeg'

const Experiences = () => {
  return (
    <div className='ColW100' style={{paddingLeft:'0px'}}>
        <div className='RowW90'>
            <div className='RowW40'></div>
            <div style={{fontSize:'150px',marginLeft:'14vw'}}>02.</div>
            <div className='RowW20' style={{textAlign:'right', justifyContent:'right'}}>
                <div style={{fontSize:'40px',marginTop:'80px'}}>EXPERIENCES</div>
                <div className='Pline' style={{marginTop:'30px', position:'relative', left:'0vw'}}></div>
                <div style={{marginRight:'-20px'}}><Lorem /></div>
                <Knowmore color='black'/>
            </div>
        </div>
        <div style={{zIndex:'-1', marginTop:'-15vw'}}>
            <img src={Hima} width='100%' height='300px' />
        </div>
        
    </div>
  )
}

export default Experiences