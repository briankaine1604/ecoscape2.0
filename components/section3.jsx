import Image from "next/image"
import StandardButton from "./UI/standardbutton"

const Section3 = () => {
  return (
    <div className="w-full h-grid1h relative text-white">
       <div className='absolute w-full h-grid1h z-10' >
            <Image
            fill={true}
            style={{objectFit:"cover"}}
            src={`/images/green1.png`}
            alt='meadow filled with flowers'
            loading="lazy"
            className=''
            />
        </div>
        <div className='absolute bg-slate-900 bg-opacity-60 z-30 flex justify-center w-full h-grid1h'>
          <div className=" w-grid1w h-full flex flex-col justify-center">
            <div className=" text-center font-semibold">
              <div className="heading1 text-center ">SHOP</div>
            Exploring our store is like embarking on a journey through a curated haven of natural wonders, 
            where every purchase contributes to a future that's greener, more mindful,
             and deeply connected to the beauty of our planet.
            </div>
            <div className="flex mt-5 justify-between">
              <StandardButton content={'Find out More'}/>
              <StandardButton/>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Section3