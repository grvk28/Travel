import React from 'react'

import * as Icons from 'react-feather'

const Knowmore = (props) => {
  return (
    <div className='RowW20' style={{position:'relative',top:'0px',left:'-20px', color:'black',justifyContent:'left',alignItems:'center',gap:'18px',width:'10vw'}}>
        <a href=''><div className='Icon2'><Icons.Book style={{position:'relative',top:'-1px',left:'4.5px'}} size='10px'/></div></a>
        <a href=''><div className='know1'>KNOW MORE</div></a>
        
    </div>
  )
}

export default Knowmore