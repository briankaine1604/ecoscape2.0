import React, { useEffect } from 'react';

const Observer = ({setIsSticking,setIsSticking2}) => {
  useEffect(() => {
    const card = document.querySelector('.suspect');
    const card2 = document.querySelector('.suspect2');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target === card) {
          setIsSticking(!entry.isIntersecting);
        } else if (entry.target === card2) {
          setIsSticking2(!entry.isIntersecting);
        }
      });
    }, {
      threshold: 0
    });
  
    observer.observe(card);
    observer.observe(card2);
  
    return () => {
      // Cleanup the observer when the component unmounts
      observer.unobserve(card);
      observer.unobserve(card2);
    };
  }, []);

  // Make sure to return something from your component
  return null;
}

export default Observer;
