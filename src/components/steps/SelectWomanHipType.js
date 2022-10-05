import React from 'react';
import { womanHipBodyType } from '../../constants/bodyTypes';
import StepSelectBodyType from '../stepsSelectBodyType/StepsSelectBodyType';

const SelectWomanHipType = ({ title, hipType, setHipType }) => {
  return (
    <div className="step womanStomachStep">
      <h3 className="stepTitle">{title}</h3>
      <StepSelectBodyType
        bodyTypes={womanHipBodyType}
        typeBody={hipType}
        setTypeBody={setHipType}
      />
    </div>
  );
};

export default SelectWomanHipType;
