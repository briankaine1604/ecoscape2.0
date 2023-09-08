"use client"
import Image from 'next/image';
import Link from 'next/link';
import EcoButton from './UI/ecobutton';
import Hamburger from './UI/hamburgernav';
import Navbar from './UI/navbarlinks';
import Observer from './UI/observer';
import HeaderState from './UI/useHeaderState';
import HeaderSection from './UI/Navbar';
import HeaderBackground from './headerBackground';


const Header = ({ showtext = true , showimage = true , navhead }) => {

  const navlinks=[
    {id:'1',link:'/',name:'Home'},
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
      <HeaderSection isSticking={isSticking} toggle={toggle} onClick={onClick} navlinks={navlinks} isSticking2={isSticking2} navhead={navhead} />
      <HeaderBackground showtext={showtext} showimage={showimage}/>
    </div>
  )
}

export default Header