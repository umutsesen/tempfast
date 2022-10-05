import React from 'react';
import StepSelectBodyType from '../stepsSelectBodyType/StepsSelectBodyType';
import { womanChestBodyType } from '../../constants/bodyTypes';

const SelectWomanChestType = ({ title, chestType, setChestType }) => {
  return (
    <div className="step womanChestStep">
      <h3 className="stepTitle">{title}</h3>
      <StepSelectBodyType
        bodyTypes={womanChestBodyType}
        typeBody={chestType}
        setTypeBody={setChestType}
      />
    </div>
  );
};

export default SelectWomanChestType;
