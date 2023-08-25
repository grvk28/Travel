import React from 'react'
import Lorem from './lorem'
import Knowmore from './knowmore'

const Travel = () => {
  return (
    <div className='RowW100'>
        <div className='ColW20' style={{textAlign:'left',marginLeft:'10vw'}}>
            <div style={{fontSize:'40px'}}>TRAVEL STYLES</div>
            <div style={{fontSize:'105px',marginLeft:'-3vw'}}>03.</div>
            <div className='Pline' style={{marginTop:'0px', position:'relative', left:'-7.5vw'}}></div>
            <Lorem />
            <Knowmore color='black'/>
        </div>
    </div>
  )
}

export default Travel