import React, { useState } from 'react';
import Cows from '../cows/Cows';
import { useNavigate } from 'react-router-dom';
import Maps from '../maps/Maps';
import userProfile from '../../Asset/userProfile/userProfile.png';
import addCattle from '../../Asset/userProfile/Frame 5.png';
import search from '../../Asset/userProfile/mouse.png';
import list from '../../Asset/userProfile/list-ul 1.png';
import map from '../../Asset/userProfile/search-normal.png';
import more from '../../Asset/userProfile/setting-2.png';
import home from '../../Asset/userProfile/home 1.png';
import '../../index.css';

const UserScreen = () => {
  const [menu, setMenu] = useState('');
  const navigate = useNavigate();
  return (
    <div className=' h-screen w-screen'>
      <div className='w-full h-full grid grid-rows-user md:grid-cols-user2 text-white'>
        <section
          id='header'
          className='bg-primary px-5 space-y-5 p-5 md:px-20 '
        >
          <div className='grid grid-cols-2 space-x-5 '>
            <div>
              <h1 className='text-3xl'>Hamza Aliyu</h1>
              <p className='text-sm w-44'>
                See how your Herd is doing this morning 🌞
              </p>
            </div>
            <div className=' ali  mx-auto'>
              <img
                className='object-cover rounded-full ml-auto'
                src={userProfile}
                alt='userProfile'
              />
            </div>
          </div>
          <div className='flex items-center justify-end space-x-2'>
            <p className='text-sm'>Add Cattle</p>
            <img
              src={addCattle}
              alt='addCattle'
              onClick={() => navigate('/addCow')}
            />
          </div>
        </section>
        <section id='body' className='bg-neutral'>
          {menu === 'home' ? <Cows /> : menu === 'map' ? <Maps /> : null}
        </section>
        <section
          id='menu'
          className='bg-primary flex flex-row md:flex-col justify-between px-10 py-4 items-center md:row-start-1 md:row-end-3 md:p-0 md:py-10'
        >
          <img
            src={home}
            alt='home'
            className='border-b-2 pb-2'
            onClick={(e) => {
              e.preventDefault();
              setMenu('home');
            }}
          />
          <img
            src={list}
            alt='list'
            onClick={(e) => {
              e.preventDefault();
              setMenu('List');
            }}
          />
          <img
            src={map}
            alt='map'
            onClick={(e) => {
              e.preventDefault();
              setMenu('map');
            }}
          />
          <img
            src={search}
            alt='search'
            onClick={(e) => {
              e.preventDefault();
              setMenu('search');
            }}
          />
          <img
            src={more}
            alt='more'
            onClick={(e) => {
              e.preventDefault();
              setMenu('more');
            }}
          />
        </section>
      </div>
    </div>
  );
};

export default UserScreen;
