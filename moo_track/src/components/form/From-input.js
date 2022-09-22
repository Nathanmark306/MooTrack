import React from 'react';

const FromInput = ({ label, ...others }) => {
  return (
    <div className='space-y-2'>
      <label htmlFor='email'>{label}</label>
      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-extralight'
        {...others}
      />
    </div>
  );
};

export default FromInput;
