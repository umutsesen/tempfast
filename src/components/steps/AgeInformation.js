import React from 'react';
import AnimatedBorderInput from '../customElement/AnimatedBorderInput';
import { useTranslation } from 'react-i18next';
import IconQuantityRemove from '../svg/icon_quantity_remove';
import IconQuantityAdd from '../svg/icon_quantity_add';

const AgeInformation = ({ age, setAge }) => {
  const { t, i18n } = useTranslation();

  const decreaseAge = () => {
    const count = Number(age) - 1;
    setAge(count);
  };

  const increaseAge = () => {
    const count = Number(age) + 1;
    setAge(count);
  };

  return (
    <div className="step ageInformation">
      <h1 className="sizemeAgeTitle">{t('ageInformation1')}</h1>
      <div className="ageInformation__inputContainer">
        <IconQuantityRemove
          className={'sizeandmeQuantity sizeandmeQuantityRemove'}
          onClick={decreaseAge}
        />
        <AnimatedBorderInput
          type="number"
          className={'sizemeAgeInput ageTextCenter'}
          value={age}
          onChange={(e) => {
            if (e.target.value.length < 3) setAge(e.target.value);
          }}
        />
        <IconQuantityAdd
          className={'sizeandmeQuantity sizeandmeQuantityAdd'}
          onClick={increaseAge}
        />
      </div>
    </div>
  );
};

export default AgeInformation;
