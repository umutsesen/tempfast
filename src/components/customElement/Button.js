import React from 'react';

const Button = ({
  children,
  onClick,
  className,
  disabled = false,
  type = 'primary',
  iconLeft = null,
  iconRight = null,
  id
}) => {
  return (
    <button
    id={id}
      disabled={disabled}
      onClick={onClick}
      className={`sizeandmeButton ${
        type === 'secondary'
          ? 'sizeandmeButton-secondary'
          : type === 'black'
          ? 'sizeandmeButton-black'
          : ''
      } ${className} ${disabled ? 'disable' : ''}`}
    >
      {iconLeft && iconLeft}
      {children}
      {iconRight && iconRight}
    </button>
  );
};

export default Button;
