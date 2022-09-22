import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import { ButtonColor } from '../../components/button/Button';
import { ReactComponent as FaceBook } from '../../Asset/backIcon/Vector-1.svg';
import { ReactComponent as Twitter } from '../../Asset/backIcon/Vector-2.svg';
import { ReactComponent as Google } from '../../Asset/backIcon/Vector.svg';
const Form = ({ children, header, subHeader }) => {
  const navigate = useNavigate();
  return (
    <div className='bg-white shadow-xl rounded-lg flex flex-col md:flex-row h-screen w-screen md:w-3/4 md:h-3/4'>
      <div className='h-1/4 md:w-1/2 md:h-full p-6 flex justify-center items-center'>
        <div className='text-center  mx-auto  my-auto md:space-y-6 '>
          <h2 className='text-xl md:text-2xl font-bold '>{header}</h2>
          <p className='text-md'>{subHeader}</p>
        </div>
      </div>

      <form
        action=''
        className='flex flex-col h-3/4 md:h-full md:w-1/2 bg-neutral px-6 py-10 space-y-4 md:overflow-scroll'
      >
        {children}
        <div className='flex justify-between text-sm pb-10 pt-2'>
          <div className='space-x-2'>
            <input type='checkbox' />
            <label htmlFor='rememberMe'>Remember me</label>
          </div>
          <a href='forgot Password'>forgot password</a>
        </div>
        <Button
          type={ButtonColor.dark}
          onClick={(e) => {
            e.preventDefault();
            navigate('/UserScreen');
          }}
        >
          Sign In
        </Button>
        <div className='mx-auto space-y-4'>
          <p>or log in with</p>
          <div className='flex gap-4'>
            <FaceBook />
            <Twitter />
            <Google />
          </div>
        </div>
        <p className='mx-auto text-xs'>
          Dont have an account yet ?
          <span className='ml-2'>
            <a href='sign up'>Sign Up</a>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Form;
