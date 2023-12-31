import Image from "next/image"
import Link from "next/link"

const Section1 = () => {
  return (
        <section className='break:grid grid-cols-2 w-full min-h-screen'>
           {/*Start of first grid */}
        <div className='bg-slate-100 flex justify-center items-center pt-20 px-10 sm:px-5'>
          
        <div className="flex-col flex h-5/6">
        <div className=" mb-10 heading1 mt-3 ">Top Stories</div>
          <Link href='#' className="order-2 ">
          <div className='w-full break:w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-grid1h  relative group overflow-hidden -mt-12 break:mb-0 mb-14' >
            <Image
            fill={true}
            style={{objectFit:"cover"}}
            src={`/images/globalwarm.png`}
            alt='meadow filled with flowers'
            loading="lazy"
            className='transit'
            />
            <div className='w-full opac break:w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-grid1h '>
          
            </div>
            
          </div>
          </Link>
          <div className='text-sm w-full break:w-72 md:w-80 lg:w-96 h-40 text-justify order-1 mb-5 break:mb-16 lg:mb-5'>
            <div>EcoScape</div>
            
            <div className="mt-2 text-2xl font-bold ">"Urgent Alarms and Rising Tides: Navigating the Complex Realities of Global Warming" </div>
            
          </div>
          </div>
        </div>
        {/*End of first grid */}
        <div className='bg-white flex justify-center items-center break:pt-48 pb-36 px-10 break:px-5'>
          <div className='mt-10'>
            <div className="flex flex-row break:flex-col border-b break:border-hidden border-gray-900 break:pb-0 pb-2">
          <Link href='#'>
          <div className='w-28 h-28 sm:w-32 sm:h-32 break:w-72 md:w-80 break:h-48 lg:w-96  lg:h-56 relative group overflow-hidden mb-4 break:mb-0' >
            <Image
            fill={true}
            style={{objectFit:"cover"}}
            src={`/images/flowers.png`}
            alt='meadow filled with flowers'
            loading="lazy"
            className='transit'
            />
            <div className='opac z-20 w-72 md:w-80 lg:w-96 h-56'>
          
            </div>
            
          </div>
          </Link>
          <div className='text-sm h-28 break:w-72 md:w-80 lg:w-96 break:h-40 text-justify break:ml-0 ml-2 break:mb-0 mb-4'>
            <div>EcoScape</div>
            <div>31st March 2023</div>
            <div className="mt-2 text-xs font-semibold">"Meadow Serenity: A Tapestry of Tranquility and Color"</div>
            <div className="text-xs antic ">Where vibrant hues and serene landscapes converge to create a truly enchanting experience.</div>
          </div>
          </div>
          
          <div className='w-full break:w-72 md:w-80 lg:w-96 h-56 flex break:flex-row flex-col justify-between'>
            <div className='break:w-32 md:w-36 lg:w-40 h-56 flex flex-row break:flex-col break:border-hidden border-b border-gray-900 break:pb-0 pb-5 break:mt-0 mt-5'>
            <Link href='#'>
          <div className='small-box  relative group overflow-hidden' >
            <Image
            fill={true}
            style={{objectFit:"cover"}}
            src={`/images/panda.png`}
            alt='meadow filled with flowers'
            loading="lazy"
            className='transit'
            />
            <div className=' opac small-box '>
          
            </div>
            
          </div>
          </Link>
          <div className='h-16 break:w-32 md:w-36 lg:w-40 lg:h-40 text-justify text-sm ml-2 break:ml-0'>
                <div>EcoScape</div>
                <div>30th April 2023</div>
                <div className="text-xs font-semibold">"Panda's Secret Hideaway: A Playful Peek Through Nature's Curtain"</div>
              </div>
            </div>


            <div className='break:w-32 md:w-36 lg:w-40 h-56 flex flex-row break:flex-col break:border-hidden border-b break:pb-0 pb-5 border-gray-900 break:mt-0 mt-5'>
            <Link href='#'>
          <div className='small-box  relative group overflow-hidden' >
            <Image
            fill={true}
            style={{objectFit:"cover"}}
            src={`/images/tiger.png`}
            alt='meadow filled with flowers'
            loading="lazy"
            className='transit'
            />
            <div className='opac small-box '></div>
            
          </div>
          </Link>
              <div className='h-16 break:w-32 md:w-36 lg:w-40 lg:h-40 text-justify text-sm break:ml-0 ml-2'>
                <div>EcoScape</div>
                <div>31st December 2022</div>
                <div className="text-xs font-semibold">"Majestic Gaze: The Enigmatic Tiger and the Green Kingdom"</div>
              </div>
            </div>
          </div>
          </div>
          
        </div>
      </section>
    
  )
}

export default Section1