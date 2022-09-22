import React from 'react';
import FromInput from '../../components/form/From-input';
//import { ReactComponent as BackArrow } from '../../Asset/backIcon/arrow-left.svg';
import Form from '../../components/form/Form';
const LogIn = () => {
  return (
    <div className=' w-screen h-screen flex justify-center items-center'>
      <Form
        header='Welcome Back!'
        subHeader='Glad to have you back, Login to continue'
      >
        <FromInput
          label='Email Address'
          id='email'
          type='email'
          placeholder='email'
        />
        <FromInput
          label='password'
          id='password'
          type='password'
          placeholder='password'
        />
      </Form>
    </div>
  );
};

export default LogIn;
