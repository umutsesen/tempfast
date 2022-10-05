import React from 'react';
import StepSelectBodyType from '../stepsSelectBodyType/StepsSelectBodyType';
import { womanStomachBodyType } from '../../constants/bodyTypes';

const SelectWomanStomachType = ({ title, stomachType, setStomachType }) => {
  return (
    <div className="step womanStomachStep">
      <h3 className="stepTitle">{title}</h3>
      <StepSelectBodyType
        bodyTypes={womanStomachBodyType}
        typeBody={stomachType}
        setTypeBody={setStomachType}
      />
    </div>
  );
};

export default SelectWomanStomachType;
