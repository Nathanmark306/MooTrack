import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextInput from '../../components/textInput/TextInput';
import Select from '../../components/select/Select';
import { UserContext } from '../../context/context';
import { useContext } from 'react';
import { httpPostCow } from '../../hooks/request.';
const AddCow = () => {
  const { cow, setCow } = useContext(UserContext);

  return (
    <div className=' h-screen w-screen flex justify-center items-center'>
      <div className='bg-neutral grid grid-rows-uuser md:grid-rows-none md:grid-cols-2  md:rounded-md h-full w-full md:w-3/4 md:h-3/4'>
        <section className='bg-primary  h-full relative flex justify-center items-center'>
          <button className=' bg-neutral px-6 py-2  m-3 rounded-lg absolute top-0 left-0'>
            cancel
          </button>
          <h2 className='mx-auto text-white my-16 font-bold text-2xl text-center'>
            Add Cows
          </h2>
        </section>
        <section className='bg-neutral md:h-full overflow-scroll p-4'>
          <Formik
            initialValues={{
              tagName: '',
              color: '',
              weight: '',
              breed: '',
              gender: '',
              commercialPurpose: '',
            }}
            validationSchema={Yup.object({
              tagName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('required'),
              color: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('required'),
              weight: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('required'),
              breed: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('required'),
              gender: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('required'),
              commercialPurpose: Yup.string().max(
                15,
                'must be 15 characters long'
              ),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setCow(values);
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form className='space-y-4'>
              <TextInput
                label='tag name'
                name='tagName'
                type='text'
                placeholder='tag name'
              />
              <TextInput
                label='color'
                name='color'
                type='text'
                placeholder='color'
              />
              <TextInput
                label='weight'
                name='weight'
                type='text'
                placeholder='weight'
              />

              <TextInput
                label='weight'
                name='weight'
                type='text'
                placeholder='weight'
              />

              <TextInput
                label='breed'
                name='breed'
                type='text'
                placeholder='breed'
              />

              <Select label='gender' name='gender'>
                <option>select</option>

                <option value='male'>male</option>
                <option value='female'>female</option>
              </Select>

              <Select label='commercialPurpose' name='commercialPurpose'>
                <option>select</option>

                <option value='Dairy'>Dairy</option>
                <option value='Beef'>Beef</option>
                <option value='skin'>Skin</option>
              </Select>

              <button
                type='submit'
                className='bg-primary px-6 py-2 text-white rounded-lg'
                onClick={(e) => {
                  httpPostCow(cow);
                }}
              >
                summit
              </button>
            </Form>
          </Formik>
        </section>
      </div>
    </div>
  );
};

export default AddCow;

<Formik
  initialValues={{ firstName: '', lastName: '', email: '' }}
  validationSchema={Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
  })}
  onSubmit={(values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }}
>
  <Form>
    <label htmlFor='firstName'>First Name</label>
    <Field name='firstName' type='text' />
    <ErrorMessage name='firstName' />

    <label htmlFor='lastName'>Last Name</label>
    <Field name='lastName' type='text' />
    <ErrorMessage name='lastName' />

    <label htmlFor='email'>Email Address</label>
    <Field name='email' type='email' />
    <ErrorMessage name='email' />

    <button type='submit'>Submit</button>
  </Form>
</Formik>;
