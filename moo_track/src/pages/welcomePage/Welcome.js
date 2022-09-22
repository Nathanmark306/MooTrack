import React from 'react';
import { useNavigate } from 'react-router-dom';
import welcome_image from '../../Asset/welcome Screen/welcome.png';
import Button from '../../components/button/Button';
import { ButtonColor } from '../../components/button/Button';
import Logo from '../../components/logo/Logo';
const Welcome = () => {
  let navigate = useNavigate();
  console.log(ButtonColor.light);
  return (
    <div className='bg-neutral w-screen h-screen flex flex-col justify-center items-center'>
      <div>
        <div>
          <img src={welcome_image} alt='' className='mx-auto mb-10 ' />
          <div className='space-y-2'>
            <Logo fill={'fill-primary'} />
            <p>MooVe with your cattle in real-time</p>
          </div>
        </div>

        <div className='flex flex-col px-4 mt-24 space-y-6'>
          <Button type={ButtonColor.light} onClick={() => navigate('/log-in')}>
            Sign In
          </Button>
          <Button type={ButtonColor.dark} onClick={() => navigate('/signUp')}>
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
