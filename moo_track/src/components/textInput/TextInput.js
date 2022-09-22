import React from 'react';
import { Formik, Form, useField } from 'formik';

const TextInput = ({ label, ...props }) => {
  const [Field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        {...Field}
        {...props}
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-extralight'
      />
      {meta.touched && meta.error ? <div> {meta.error} </div> : null}
    </div>
  );
};

export default TextInput;
