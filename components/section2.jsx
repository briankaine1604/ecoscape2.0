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
    {index: 1 , image:'flower-card.png', title:'1',Description:'kk',height:'h-grid2h'},
    {index: 2 , image:'funding-card.png', title:'2',Description:'kk',height:'h-grid3h'},
    {index: 3 , image:'product-card.png', title:'3',Description:'kk',height:'h-grid2h'},
    {index: 4 , image:'research-card.png', title:'4',Description:'kk',height:'h-grid2h'},
    {index: 5 , image:'wildlife-card.png', title:'5',Description:'kk',height:'h-grid2h'},
  ]

  return (
    <div className="bg-purple-200 w-full h-screen flex flex-col justify-center overflow-hidden heading1 ">
      Focus
      <Flickity
        className={'carousel border h-4/6 flex flex-col'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        
        {
          carouselData.map(({index,image,title,Description,height})=>(
            <div key={index} className={`carousel-cell card-style w-1/3 ${height} `}>
              
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
              
              {title}
            </div>
          ))
        }
      </Flickity>
    </div>
  );
};

export default Section2;
