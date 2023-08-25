import logo from './logo.svg';
import './App.css';
import Petra from './images/petra.jpeg'
import HiTours from './images/HiTours.jpeg'
import * as Icons from 'react-feather'
import Image from './components/image';
import Image2 from './components/image2';
import { Link } from 'react-router-dom';
import Story1 from './components/story1';
import CamelSea from './images/camelSea.jpeg';
import Footer from './components/footer';
import Destinations from './components/destinations';
import Experiences from './components/experiences';
import Travel from './components/travel';
import NewAge from './components/newage';
import Testimonial from './components/testimonial';

function App() {
  return (
    <div className="App">
       <div to='/' className='petra'><img width='100%' height='1100px' src={Petra}/></div>
      <div className='ColW100' style={{position:'absolute', top:'0px'}}>
          <div className='RowW90'>
            <div className='HiTours'><img width='80px' src={HiTours} /></div>
            <div className='RowW50' style={{position:'absolute',left:'35vw',top:'30px', gap:'8%'}}>
              <a href='/' className='NavTab'>ABOUT US</a>
              <a href='/' className='NavTab'>DESTINATIONS</a>
              <a href='/' className='NavTab'>EXPERIENCES</a>
              <a href='/' className='NavTab'>TRAVEL STYLES</a>
              <a href='/' className='NavTab'>CONTACT US</a>
            </div>
          </div>
          <div className='ColW30' style={{right:'0%',marginTop:'150px',left:'60%'}}>
              <div className='RowW30' style={{ gap:'40px'}}>
              <div className='Wline1'>.</div>
              <div className='Top2'>NEW AGE DESTINATION MANAGEMENT</div>
              </div>
          </div>
      </div>
       
        
       
       

       <div className='ColW20' style={{position:'absolute', top:'45%', left:'75%',fontSize:'60px', textAlign:'left', color:'white'}}>
        Take the world for a ride
       </div>

       <div className='ColW5' style={{position:'absolute', top:'90%', right:'1.5%',fontSize:'12px', gap:'10px'}}>
        <Link className='Call' style={{position:'relative',left:'60px', borderRadius:'50%'}}><Icons.Phone size='10px'/></Link>
        <Link className='Contact' style={{width:'80px'}}>CONTACT US</Link>
       </div>

       
       <div style={{position:'absolute', top:'105%', left:'4%',fontSize:'50px', textAlign:'left', color:'white'}}>
        <div className='Wline2'></div>
        <div className='ColW20' >
          Journeys that can't be beat
        </div>
        <div className='ColW20' style={{fontSize:'10px',marginTop:'-10px'}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div className='RowW20' style={{position:'relative',top:'0px',left:'0px', color:'white',justifyContent:'right',alignItems:'center',gap:'2px'}}>
          <Link><div className='Icon1'><Icons.Book style={{position:'relative',top:'-33px',left:'3.5px'}} size='10px'/></div></Link>
          <Link><div className='know'>KNOW MORE</div></Link>
        </div>

        <div className='RowW80' style={{position:'absolute', top:'28%', left:'28%', gap:'30px'}}>
          <Image title='ACADIA NATIONAL PARK'/>
          <Image title='BLOG TITLES'/>
         <Image title='ACADIA NATIONAL PARK'/>
          <Image title='ACADIA NATIONAL PARK'/>
        </div>
        
       </div>
       <div className='RowW90' style={{gap:'5vw',left:'0vw',marginTop:'100px'}}>
        <Story1 title='UNIQUE TOURS' pic={CamelSea}/>
        <Story1 title="GLOBAL PRESENCE" pic={CamelSea}/>
        <Story1 title='25 YEARS OF EXPERIENCE' pic={CamelSea}/>
       </div>
       <Destinations/>
       <Experiences/>
       <Travel/>
       <NewAge/>
       <Testimonial/>
       <Footer/>
    </div>
  );
}

export default App;
