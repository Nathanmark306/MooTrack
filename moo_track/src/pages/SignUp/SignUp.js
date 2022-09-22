import React from 'react';
import Form from '../../components/form/Form';
import FromInput from '../../components/form/From-input';
const SignUp = () => {
  return (
    <div className=' w-screen h-screen flex justify-center items-center'>
      <Form
        header='Hey There!'
        subHeader='Sign up and lets get you started in on time'
      >
        <FromInput
          label='Full Name'
          id='Full Name'
          type='text'
          placeholder='four eyes'
        />
        <FromInput
          label='Email Address'
          id='Address'
          type='text'
          placeholder='four_eyes42@gmail.com'
        />
        <FromInput label='farm Name' id='Address' type='text' />
        <FromInput label='Country' id='Country' type='text' />
        <FromInput label='State/Province' id='Country' type='text' />
        <FromInput label='password' id='password' type='password' />
        <FromInput label='Confirm Password' id='password' type='password' />
      </Form>
    </div>
  );
};

export default SignUp;
