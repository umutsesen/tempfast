import React from 'react';
import classNames from 'classnames';

const LabelButton = ({ children, bottomRight, bold, style }) => {
  const className = classNames('sizeandmeLabelButton', {
    shadowBottomRight: bottomRight
  });
  return (
    <div className={className}>
      <span className={bold ? 'sizeandmeLabelButton__bold' : ''} style={style}>
        {children}
      </span>
    </div>
  );
};

export default LabelButton;
