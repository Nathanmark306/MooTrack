import React, { useContext } from 'react';
import { IMAGE } from './Images';
import { UserContext } from '../../context/context';
const Dot = () => {
  const { currSlide } = useContext(UserContext);
  return (
    <div
      id='progress-indicator'
      className='flex justify-center items-center gap-4 mb-5 md:pt-32'
    >
      {IMAGE.map((dot, i) => {
        const Active = currSlide === i ? 'px-3' : null;
        return (
          <span
            className={`bg-primary w-2 h-2 p-1 rounded-full transition-all duration-150 ${Active}`}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default Dot;
/***/
