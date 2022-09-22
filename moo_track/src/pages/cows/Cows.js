import React, { useContext, useEffect, useState } from 'react';
import img from '../../Asset/userProfile/userProfile.png';
import { httpGetCows } from '../../hooks/request.';
import { UserContext } from '../../context/context';
const Cows = () => {
  const [cows, setCows] = useState([]);
  const { cow } = useContext(UserContext);
  useEffect(() => {
    const cow = async () => {
      const cow = await httpGetCows();
      setCows(cow);
    };
    cow();
  }, [cow]);
  console.log(cows);
  return (
    <div className='text-black space-y-2 m-2'>
      {cows.map((cow) => (
        <div className='flex bg-white gap-6 items-center p-2'>
          <section>
            <img src={img} alt='' className='' />
          </section>
          <section>
            <h3 className='font-bold '>{cow.tagName}</h3>
            <p className='text-sm'>{`${cow.weight}kg,  ${cow.breed}`}</p>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Cows;
