import React from 'react';
import Logo from '../../components/logo/Logo';

const SplashScreen = () => {
  return (
    <div className='flex justify-center items-center text-4xl bg-primary text-zinc-100 -50 uppercase w-full h-screen '>
      <Logo fill={`fill-neutral`} />
    </div>
  );
};

export default SplashScreen;
