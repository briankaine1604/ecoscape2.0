"use client"
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css'; // Import Flickity CSS
import '@styles/custom-flickity.css'
import Image from 'next/image';


const flickityOptions = {
  initialIndex: 0,
  wrapAround: true,
  cellAlign: 'left', // Align cells to the left
  selectedAttraction: 0.05, // Increase or decrease to change attraction speed
  friction: 0.8, // Increase or decrease to change friction
};

const Section2 = () => {
 
  const carouselData= [
    {index: 1 , image:'flower-card.png', title:"Nature's Symphony: A Bouquet of Yellow and Red Blossoms",Description:'kk',height:'md:h-grid2h h-grid4h', width:'w-grid3w md:w-grid2w lg:w-1/3'},
    {index: 2 , image:'donate-card.png', title:"\"Toe the Line: A Fun Guide to Beach Conservation\"",Description:'kk',height:'md:h-grid3h h-grid2h', width:'lg:w-grid1w'},
    {index: 3 , image:'green-card.png', title:"\"Caring for Nature:Nurturing Nature Through Action\"",Description:'kk',height:'md:h-grid2h h-grid4h', width:'w-grid2w lg:w-1/3'},
    {index: 4 , image:'parrot-card.png', title:"\"The Vibrant Plumage of the Scarlet Macaw: Nature's Living Rainbow\"",Description:'kk',height:'md:h-grid2h h-grid4h', width:'w-grid2w lg:w-1/3'},
    {index: 5 , image:'healthy-card.png', title:"Nature's Bounty: A Cornucopia of Health",Description:'kk',height:'md:h-grid2h h-grid4h', width:'w-grid2w lg:w-1/3'},
  ]

  return (
    <div className="bg-purple-200 w-full min-h-screen text-base lg:text-xl flex flex-col justify-center overflow-hidden  ">
      <div className='ml-10 heading1'>Focus</div>
      <Flickity
        className={'carousel px-10 w-full bg-purple-200'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        
        {
          carouselData.map(({index,image,title,Description,height,width})=>(
            <div key={index} className={`carousel-cell card-style ${height} ${width} `}>
              
             <div className='relative w-full h-cardpic '>
             <Image
                fill={true}
                style={{objectFit:"cover"}}
                src={`/images/${image}`}
                alt={Description}
                loading="lazy"
                className='transition ease-in-out duration-200 delay-75'
                />
             </div>
              
              <div className='px-2'>{title}</div>
            </div>
          ))
        }
      </Flickity>
      
    </div>
  );
};

export default Section2;
