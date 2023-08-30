import Image from "next/image"
import Link from "next/link"

const Section1 = () => {
  return (
        <section className='grid grid-cols-2 w-full min-h-screen'>
        <div className='bg-slate-100 pt-5'></div>
        <div className='bg-white flex justify-center items-center pt-48 pb-40'>
          <div className='border border-blue-400'>
            <div className="">
          <Link href='#'>
          <div className='w-96 h-56 relative group overflow-hidden' >
            <Image
            fill={true}
            style={{objectFit:"cover"}}
            src={`/images/sec2img2.jpg`}
            alt='meadow filled with flowers'
            loading="lazy"
            className='transition ease-in-out  group-hover:scale-105 duration-500 delay-100'
            />
            <div className='bg-gray-200 absolute bg-opacity-5 group-hover:bg-opacity-20 z-20 w-96 h-56'>
          
            </div>
            
          </div>
          </Link>
          <div className='border border-red-400 w-96 h-40'>
            <div>EcoScape</div>
            <div>31st March 2023</div>
            <div className="mt-5 text-sm antic">"Meadow Serenity: A Tapestry of Tranquility and Color"</div>
          </div>
          </div>
          
          <div className='w-96 h-56 flex justify-between'>
            <div className=' w-40 h-56'>
            <Link href='#'>
          <div className='w-40 h-40 relative group overflow-hidden' >
            <Image
            fill={true}
            style={{objectFit:"cover"}}
            src={`/images/panda.png`}
            alt='meadow filled with flowers'
            loading="lazy"
            className='transition ease-in-out  group-hover:scale-105 duration-500 delay-100'
            />
            <div className='bg-gray-200 absolute bg-opacity-5 group-hover:bg-opacity-20 z-20 w-96 h-56'>
          
            </div>
            
          </div>
          </Link>
              <div className='h-16 border'></div>
            </div>
            <div className=' w-40 h-56'>
            <Link href='#'>
          <div className='w-40 h-40 relative group overflow-hidden' >
            <Image
            fill={true}
            style={{objectFit:"cover"}}
            src={`/images/tiger.png`}
            alt='meadow filled with flowers'
            loading="lazy"
            className='transition ease-in-out  group-hover:scale-105 duration-500 delay-100'
            />
            <div className='bg-gray-200 absolute bg-opacity-5 group-hover:bg-opacity-20 z-20 w-96 h-56'>
          
            </div>
            
          </div>
          </Link>
              <div className='h-16 border'></div>
            </div>
          </div>
          </div>
          
        </div>
      </section>
    
  )
}

export default Section1