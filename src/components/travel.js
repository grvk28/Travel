import React from 'react'
import Lorem from './lorem'
import Knowmore from './knowmore'
import Image3 from './image3'

const Travel = () => {
  return (
    <div className='RowW100'>
        <div className='ColW20' style={{textAlign:'left',marginLeft:'10vw'}}>
            <div style={{fontSize:'40px', width:'30vw'}}>TRAVEL STYLES</div>
            <div style={{fontSize:'105px',marginLeft:'-3vw'}}>03.</div>
            <div className='Pline' style={{marginTop:'0px', position:'relative', left:'0vw'}}></div>
            <Lorem />
            <Knowmore color='black'/>
        </div>
        <div className='ColW50' style={{left:'1vw'}}>
            <div className='RowW90'>
                <div className='rel' style={{marginLeft:'60px'}}>
                    <Image3 width='200px' height='120px' title='EXPERIENCE WILDLIFE'/>
                </div>
                <div className='rel' style={{marginLeft:'20px'}}>
                    <Image3 width='200px' height='120px' title='EXPERIENCE WILDLIFE'/>
                </div>
            </div>
            <div className='RowW90' style={{marginTop:'-10px'}}>
                <div className='rel' style={{marginLeft:'170px'}}>
                    <Image3 width='200px' height='120px' title='EXPERIENCE WILDLIFE'/>
                </div>
                <div className='rel' style={{marginLeft:'20px'}}>
                    <Image3 width='200px' height='120px' title='EXPERIENCE WILDLIFE'/>
                </div>
            </div>
            <div className='RowW90'></div>
        </div>
    </div>
  )
}

export default Travel