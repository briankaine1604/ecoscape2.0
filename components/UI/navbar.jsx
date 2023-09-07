import Hamburger from './hamburgernav';
import Navbar from './navbarlinks';
import Link from 'next/link';

const HeaderSection = ({ isSticking, isSticking2, toggle, onClick, navlinks }) => {
  return (
    <div className={`slide-in-top flex justify-between items-center lg:grid grid-cols-12 group navhead ${isSticking ? 'sticking' : ''} ${isSticking2 ? 'sticking2' : ''}`}>
        <div className='col-span-2 justify-center flex bitter items-center text-white text-4xl'>
          <Link href='/' className={`ml-5  ${!isSticking ? 'hidden' : 'flex'}`}>Ecoscape.</Link>
          </div>
          <div className='col-span-8 lg:grid grid-cols-6 text justify-center'>
              {/* Hamburger navigation */}
            <Hamburger toggle={toggle} onclick={onClick} navlinks={navlinks} />
              {/* Hamburger navigation end */}
              <Navbar navlinks={navlinks} />
            </div>
          
      </div>
  )
}

export default HeaderSection