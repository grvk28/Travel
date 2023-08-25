import React from 'react'

const Story1 = (props) => {
  return (
    <div className='ColW30' style={{width:'22vw', alignItems:'center', justifyContent:'center'}}>
        <img src={props.pic} width='240px' height='225px' style={{borderRadius:'15px'}}/>
        <div style={{fontSize:'25px'}}>{props.title}</div>
        <div className='Pline'></div>
        <div style={{width:'80%', margin:'10%',fontSize:'10px'}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
        </div>
    </div>
  )
}

export default Story1