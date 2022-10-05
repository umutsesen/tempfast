import React from 'react';
import { manHipBodyType } from '../../constants/bodyTypes';
import StepSelectBodyType from '../stepsSelectBodyType/StepsSelectBodyType';

const SelectManHipType = ({ title, hipType, setHipType }) => {
  return (
    <div className="step womanStomachStep">
      <h3 className="stepTitle">{title}</h3>
      <StepSelectBodyType
        bodyTypes={manHipBodyType}
        typeBody={hipType}
        setTypeBody={setHipType}
      />
    </div>
  );
};

export default SelectManHipType;
