import React from 'react';
import IconUserCircle from '../svg/icon_user_circle';

const InformPanel = ({ children, gender, heightRangeValue }) => {
  return (
    <div className="yourInformationsExplanations">
      {children}
      {/* <h3>Bilgileriniz</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            vehicula, mi ac accumsan rhoncus, massa lectus consequat quam, vitae
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            vehicula, mi ac accumsan itae
          </p> */}
    </div>
  );
};

export default InformPanel;
