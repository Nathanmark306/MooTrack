import React from 'react';

const Logo = ({ color, fill }) => {
  return (
    <div className='flex items-center gap-2 fill-black'>
      {/**M */}
      <svg
        className={`${fill}`}
        width='35'
        height='30'
        viewBox='0 0 35 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0 0.297363H10.0569L17.565 19.4592L24.8974 0.297363H34.9041V29.8019H26.5924V13.5137L20.955 29.7895H13.9993L8.31169 13.3898V29.7895H0V0.297363Z'
          fill={`${color}`}
        />
      </svg>
      {/**o */}
      <svg
        className={`${fill}`}
        width='19'
        height='18'
        viewBox='0 0 19 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M9.85471 17.8934C14.8057 17.8934 18.8193 13.9339 18.8193 9.0495C18.8193 4.16513 14.8057 0.205566 9.85471 0.205566C4.90371 0.205566 0.890137 4.16513 0.890137 9.0495C0.890137 13.9339 4.90371 17.8934 9.85471 17.8934Z'
          fill={`${color}`}
        />
      </svg>
      {/**o */}
      <svg
        className={`${fill}`}
        width='19'
        height='18'
        viewBox='0 0 19 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M9.85471 17.8934C14.8057 17.8934 18.8193 13.9339 18.8193 9.0495C18.8193 4.16513 14.8057 0.205566 9.85471 0.205566C4.90371 0.205566 0.890137 4.16513 0.890137 9.0495C0.890137 13.9339 4.90371 17.8934 9.85471 17.8934Z'
          fill={`${color}`}
        />
      </svg>
      {/**T */}
      <svg
        className={`${fill}`}
        width='25'
        height='30'
        viewBox='0 0 25 30'
        fill='white'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0.762451 0.297363H24.9442V6.82503H16.9715V29.8019H8.65981V6.82503H0.775004V0.297363H0.762451Z'
          fill={`${color}`}
        />
      </svg>
      <svg
        className={`${fill}`}
        width='25'
        height='30'
        viewBox='0 0 25 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M13.1533 0.297363C20.5735 0.297363 24.3151 4.48399 24.3151 9.76062C24.3151 13.6128 22.1932 16.9571 17.736 18.2949L24.4783 29.8019H15.1873L9.24855 18.9266H8.35711V29.8019H0.0454102V0.297363H13.1533ZM12.4753 7.15946H8.35711V13.3155H12.4753C14.7227 13.3155 15.8653 12.2255 15.8653 10.2189C15.8653 8.37333 14.7227 7.15946 12.4753 7.15946Z'
          fill={`${color}`}
        />
      </svg>
      <svg
        className={`${fill}`}
        width='32'
        height='30'
        viewBox='0 0 32 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M21.0028 24.9836H10.3935L8.78642 29.8019H0.0478516L10.946 0.297363H20.5383L31.3987 29.8019H22.6225L21.0028 24.9836ZM15.6919 9.16607L12.5154 18.7036H18.9186L15.6919 9.16607Z'
          fill={`${color}`}
        />
      </svg>
      <svg
        className={`${fill}`}
        width='30'
        height='30'
        viewBox='0 0 30 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M14.9718 0C22.4799 0 27.8285 4.27333 29.3101 10.962H20.3581C19.3034 8.74484 17.3071 7.53097 14.8462 7.53097C11.0294 7.53097 8.53085 10.4542 8.53085 14.9752C8.53085 19.5334 11.0294 22.469 14.8462 22.469C17.3071 22.469 19.3034 21.2552 20.3581 19.038H29.3101C27.8285 25.7391 22.4799 30 14.9718 30C5.9821 30 0.0810547 23.8068 0.0810547 14.9752C0.0810547 6.19323 5.9821 0 14.9718 0Z'
          fill={`${color}`}
        />
      </svg>
      <svg
        className={`${fill}`}
        width='28'
        height='30'
        viewBox='0 0 28 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M8.56414 16.8704V29.8019H0.252441V0.297363H8.56414V13.0183L17.8552 0.297363H27.4475L16.4615 14.6037L27.9999 29.7895H17.943L8.56414 16.8704Z'
          fill={`${color}`}
        />
      </svg>
    </div>
  );
};

export default Logo;
