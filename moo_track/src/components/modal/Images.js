import React, { useContext } from 'react';
import { UserContext } from '../../context/context';
import image1 from '../../Asset/onboarding/Image-1.png';
import image2 from '../../Asset/onboarding/Image-2.png';
import image3 from '../../Asset/onboarding/Image.png';
import image4 from '../../Asset/onboarding/Mapsicle Map.png';

export const IMAGE = [
  { img: image1, id: 1 },
  { img: image2, id: 2 },
  { img: image3, id: 3 },
  { img: image4, id: 4 },
];
const Images = () => {
  const { currSlide } = useContext(UserContext);

  return (
    <div
      id='image-container'
      className='md:flex-shrink-0 relative h-1/2 w-full md:w-1/2 md:h-full overflow-hidden'
    >
      {IMAGE.map((img, i) => {
        const translate = 100 * (i - currSlide);
        console.log(translate);
        return (
          <img
            src={img.img}
            alt='cow_1'
            key={img.id}
            className={`object-cover w-full absolute top-0 transition-all duration-300`}
            style={{ transform: `translateX(${translate}%)` }}
          />
        );
      })}
    </div>
  );
};

export default Images;
