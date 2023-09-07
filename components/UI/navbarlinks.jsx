import Link from 'next/link'



const NavbarLink = ({navlinks}) => {
  return (
    <>
   
    {navlinks.map(({name,id,link})=>(
      <div key={id} className='text-md lg:text-lg xl:text-xl lg:flex justify-center items-center relative hidden'>
      <Link
        className='hover:border-b focus:border-b font-medium '
        href={link}
      >
        {name}
      </Link>
     
    </div>
    
    ))}
    
    </>
  )
}

export default NavbarLink