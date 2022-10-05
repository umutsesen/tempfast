import React from 'react';

const AnimatedBorderInput = ({
  type,
  pattern,
  onChange,
  onBlur,
  value,
  className,
  tabIndex,
  maxLength,
  textCenter = false,
  ...props
}) => {
  return (
    <div className={`animatedBorderInputWrapper ${className}`}>
      <input
        tabIndex={tabIndex}
        type={type}
        pattern={pattern}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        maxLength={maxLength}
        style={{ textAlign: textCenter ? 'center' : '' }}
        {...props}
      />
      <span className="animatedBorder"></span>
    </div>
  );
};

export default AnimatedBorderInput;
