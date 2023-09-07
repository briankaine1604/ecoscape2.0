"use client"
import Image from 'next/image';
import Link from 'next/link';
import EcoButton from './UI/ecobutton';
import Hamburger from './UI/hamburgernav';
import Navbar from './UI/navbarlinks';
import Observer from './UI/observer';
import HeaderState from './UI/useHeaderState';
import HeaderSection from './UI/Navbar';


const Header = () => {

  const navlinks=[
    {id:'1',link:'#',name:'Home'},
    {id:'2',link:'/blog',name:'Blog'},
    {id:'3',link:'/explore',name:'Explore Nature'},
    {id:'4',link:'/gallery',name:'Gallery'},
    {id:'5',link:'/shop',name:'Our products'},
    {id:'6',link:'/contact',name:'Contact us'},
  ]
   
  const { isSticking, isSticking2, toggle, onClick, setIsSticking, setIsSticking2 } = HeaderState();
    
  return (
    <div className='text-white overflow-hidden'>
      <><Observer setIsSticking={setIsSticking} setIsSticking2={setIsSticking2} /></>
      
      <EcoButton toggle={toggle} />
      <HeaderSection isSticking={isSticking} toggle={toggle} onClick={onClick} navlinks={navlinks} isSticking2={isSticking2} />
      <div className='suspect2'>
        <Image
        fill={true}
        style={{objectFit:"cover"}}
        src={`/images/eco2.jpg`}
        alt='green trees in a forest'
        loading="lazy"
        
        />
        
      </div>
      <div className='bg-slate-900 w-full h-screen absolute justify-center top-0 items-center flex bg-opacity-40 z-20 text-white uppercase'>
        <div className='flex-col text-center text-3xl font-semibold'><div>"Exploring nature's beauty:</div> <div>Your Journey through the Ecoscape"</div> </div></div>
    </div>
  )
}

export default Header