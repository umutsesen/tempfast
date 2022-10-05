import React from 'react';

const Input = ({
  placeholder,
  type,
  pattern,
  onChange,
  onBlur,
  value,
  className,
  tabIndex
}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={`sizeandmeInput ${className ? className : ''}`}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      tabIndex={tabIndex}
      pattern={pattern}
    />
  );
};

export default Input;
