import React from 'react';
import StepSelectBodyType from '../stepsSelectBodyType/StepsSelectBodyType';
import { manShoulderBodyType } from '../../constants/bodyTypes';

const SelectManShoulderType = ({ title, shoulderType, setShoulderType }) => {
  return (
    <div className="step manShoulderStep">
      <h3 className="stepTitle">{title}</h3>
      <StepSelectBodyType
        bodyTypes={manShoulderBodyType}
        typeBody={shoulderType}
        setTypeBody={setShoulderType}
      />
    </div>
  );
};

export default SelectManShoulderType;
