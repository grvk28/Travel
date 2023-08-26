import React from 'react'
import Lorem from './lorem'
import Knowmore2 from './knowmore2'
import Hima from '../images/Hima.jpeg'
import Image2 from './image2'
import Mt from '../images/Hima.jpeg'

const Experiences = () => {
  return (
    <div className='ColW100' style={{paddingLeft:'0px'}}>
        <div className='RowW90'>
            <div className='RowW50' style={{paddingRight:'0px'}}>
                <div className='ColW40' style={{paddingRight:'0px'}}>
                    <div style={{}}>
                        <Image2 width='200px' height='120px' title='EXPERIENCE WILDLIFE'/>
                    </div>
                    <div style={{marginTop:'20px', marginLeft:'28px'}}>
                        <Image2 width='170px' height='220px' title='EXPERIENCE WILDLIFE'/>
                    </div>
                </div>
                <div className='ColW50' style={{padding:'0px'}}>
                    <div className='RowW100' style={{padding:'0px', gap:'10px'}}>
                    <div style={{width:'130px'}}>
                        <div><img src={Mt} height='220px' width='145px' style={{borderRadius:'10px'}}/></div>
                        <div className='ImageDes'></div>
                    </div>
                    <div className='rel' style={{width:'100px', left:'20px', top:'60px'}}>
                        <div><img src={Mt} height='160px' width='100px' style={{borderRadius:'10px'}}/></div>
                        <div className='ImageDes'></div>
                    </div>
                    </div>
                    <div style={{position:'relative',top:'55px', textAlign:'left'}}>
                        <Image2 width='242px' height='150px' title='EXPERIENCE WILDLIFE'/>
                    </div>
                </div>
            </div>
            <div style={{fontSize:'150px',marginLeft:'5vw'}}>02.</div>
            <div className='RowW20' style={{textAlign:'right', justifyContent:'right'}}>
                <div style={{fontSize:'40px',marginTop:'80px'}}>EXPERIENCES</div>
                <div className='Pline' style={{marginTop:'30px', position:'relative', left:'0vw'}}></div>
                <div style={{marginRight:'-20px'}}><Lorem /></div>
                <Knowmore2/>
            </div>
        </div>
        <div style={{zIndex:'-1', marginTop:'-15vw'}}>
            <img src={Hima} width='100%' height='300px' />
        </div>
        
    </div>
  )
}

export default Experiences