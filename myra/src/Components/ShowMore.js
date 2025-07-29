import React, { useState, useEffect } from 'react';
import pic1 from '../Asserts/pickel1.png';
import pic2 from '../Asserts/snacks.png';
import pic3 from '../Asserts/sweets.png';
import pic4 from '../Asserts/samosa.png';

const MostPopular = () => {
  const allImages = [pic1, pic2, pic3, pic4, pic1, pic2, pic3, pic4, pic1, pic2, pic3, pic4];

  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);

  const updateVisibleCount = () => {
    const width = window.innerWidth;
    if (width <= 576) {
      setVisibleCount(2); // Show 2 images
    } else if (width > 578 && width <= 992) {
      setVisibleCount(5); // Show 4 images
    } else if (width >= 992 && width <= 1400) {
      setVisibleCount(8); // Show 6 images
    } else {
      setVisibleCount(allImages.length); // For larger screens, show all
    }
  };

  useEffect(() => {
    updateVisibleCount(); // Initial call
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const visibleImages = showAll ? allImages : allImages.slice(0, visibleCount);

  return (
    <div className='container mostView'>
      <div className='row'>
        <div className='col-12'><h2>Most Popular</h2></div>
      </div>
      <div className='row'>
        <div className='col-12 d-flex flex-wrap gap-2'>
          {visibleImages.map((img, index) => (
            <img key={index} src={img} className='mostPImg' alt={`Popular ${index}`} />
          ))}
        </div>
        {visibleCount < allImages.length && (
          <div className='col-12 mt-3'>
            <button className="btn btn-outline-primary" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MostPopular;
