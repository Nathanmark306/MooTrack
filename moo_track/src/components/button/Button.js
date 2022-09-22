export const ButtonColor = {
  light: ['bg-neutral', 'text-primary'],
  dark: ['bg-primary', 'text-neutral'],
};

const Button = ({ name, type, children, ...othersProps }) => {
  const mode = type.join(' ');
  return (
    <button
      className={`${mode} px-6 py-2 md:w-3/4  rounded-md shadow-md text-center`}
      {...othersProps}
    >
      {children}
    </button>
  );
};

export default Button;
