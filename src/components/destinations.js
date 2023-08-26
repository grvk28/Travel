import React from 'react'
import Lorem from './lorem'
import Knowmore from './knowmore'
import Mt from '../images/redIceMt.webp'
import * as Icons from 'react-feather'

const Destinations = () => {
  return (
    <div className='RowW100'>
        <div style={{fontSize:'150px',marginLeft:'8vw'}}>01.</div>
        <div className='ColW20' style={{textAlign:'left',marginLeft:'5vw'}}>
            <div style={{fontSize:'40px'}}>DESTINATIONS</div>
            <div className='Pline' style={{marginTop:'80px', position:'relative', left:'-0vw'}}></div>
            <Lorem />
            <Knowmore color='black'/>
        </div>
        <div className='RowW30' style={{marginLeft:'6vw',width:'35vw', flexWrap:'nowrap', gap:'40px'}}>
            <div>
                <img src={Mt} height='400px' width='270px' style={{borderRadius:'20%'}}/>
                <div className='Suno'>ACADIA NATIONAL PARK</div>
            </div>
            <div>
                <img src={Mt} height='400px' width='270px' style={{borderRadius:'20% 0 0% 20%'}}/>
                <div className='Suno1' ><Icons.ArrowRight/></div>
                <div className='Suno' style={{marginTop:'-30px'}}>ACADIA NATIONAL PARK</div>
            </div>
        </div>   
    </div>
  )
}

export default Destinations