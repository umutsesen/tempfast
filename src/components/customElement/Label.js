import React from 'react';

const Label = ({ children, fontSize }) => {
  return (
    <div className="sizemeLabel" style={{ fontSize: fontSize }}>
      <div className="sizemeLabelVerticalLine"></div> {children}
    </div>
  );
};

export default Label;
