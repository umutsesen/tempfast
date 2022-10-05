import React from 'react';
import StepSelectBodyType from '../stepsSelectBodyType/StepsSelectBodyType';
import { manStomachBodyType } from '../../constants/bodyTypes';

const SelectManStomachType = ({ title, stomachType, setStomachType }) => {
  return (
    <div className="step manStomachStep">
      <h3 className="stepTitle">{title}</h3>
      <StepSelectBodyType
        bodyTypes={manStomachBodyType}
        typeBody={stomachType}
        setTypeBody={setStomachType}
      />
    </div>
  );
};

export default SelectManStomachType;
