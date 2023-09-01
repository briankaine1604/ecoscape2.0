"use client"
import { useState } from "react";

const Section2 = () => {
  const imgArray = [
    { index: "1", Title: "Title 1", image: "image/green.png" },
    { index: "2", Title: "Title 2", image: "image/green.png" },
    { index: "3", Title: "Title 3", image: "image/green.png"},
    { index: "4", Title: "Title 4", image: "image/green.png" },
    { index: "5", Title: "Title 5", image: "image/green.png"},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="bg-purple-200 w-full h-screen flex">
    {imgArray.map(({ index, Title, image }, i) => {
      // Calculate the position of the current card relative to currentIndex
      const position = i - currentIndex;

      // Determine the class based on the position
      let cardClass = "hidden";

      if (position === 0) {
        cardClass = "w-2/5 h-48 bg-slate-900 block";
      } else if (position === 1) {
        cardClass = "w-2/5 h-48 bg-slate-900 block mx-5";
      } else if (position === 2) {
        cardClass = "w-2/5 h-48 bg-slate-900 block";
      }

      return (
        <div key={index} >
          {Title} 
          <Image
          fill={true}
          style={{objectFit:"cover"}}
          src={image}
          alt='meadow filled with flowers'
          loading="lazy"
          className='transit'
          />
        </div>
      );
    })}
  </div>
  );
};

export default Section2;
