import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/context';
import Button from '../button/Button';
import Dot from './Dot';
import Images from './Images';
import { ButtonColor } from '../button/Button';
const Modal = () => {
  const { nextSlide, currSlide } = useContext(UserContext);
  let navigate = useNavigate();
  return (
    <div className='flex flex-col mx-auto w-full h-full md:w-3/4 md:h-3/4 md:flex-row shadow-lg  md:rounded-2xl'>
      <Images />
      <div className='bg-neutral px-6  py-10 h-[50vh] flex flex-col justify-between md:w-full md:h-full'>
        <div
          id='text-container'
          className='text-center w-60 mx-auto mt-5 space-y-2'
        >
          <h2 className='font-bold text-md text-xl'>
            Track and Trail Cattles With Ease
          </h2>
          <p className='text-light text-s'>
            Accurately track cattles to prevent theft, loss or diseases.
          </p>
        </div>

        <Dot />
        <div
          id='buttons-container'
          className='flex flex-row justify-between md:flex-col md:items-end px-3 md:px-0 mb-4 md:gap-2'
        >
          <Button type={ButtonColor.light} onClick={() => navigate('welcome')}>
            Skip
          </Button>
          <Button
            type={ButtonColor.dark}
            onClick={() => {
              if (currSlide === 3) {
                navigate('welcome');
              } else {
                nextSlide();
              }
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
