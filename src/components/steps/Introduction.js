import { useTranslation } from 'react-i18next';
import React, { useEffect } from 'react';
import Choice from '../choice/Choice';
import FitChoiceSlider from '../fitChoiceSlider/FitChoiceSlider';
import Label from '../customElement/Label';

const Introduction = ({
  setGender,
  gender,
  setHeigtRangeValue,
  setWeightRangeValue,
  fitChoice,
  setFitChoice,
  heightRangeValue,
  weightRangeValue
}) => {
  const { t, i18n } = useTranslation();

  const dummyImage =
  document.getElementById('sizeandmeproductimg').href;;

  return (
    <div className="step sizemeIntroduction">
      <img src={dummyImage} className="sizemeIntroductionProductImage" id="sizeandmeProductImg1"/>

      <div className="sizemeIntroductionChoices">
        <div className="genderChoice">
    {/*       <label>
            <input
              type="radio"
              name="sizemeGender"
              id="sizemeMan"
              value="man"
              className="sizemeSelectSex"
              onChange={(e) => setGender(e.target.value)}
              checked={gender === 'man'}
            />
            <div className="sizemeSelectSexTab">{t('introduction1')}</div>
          </label> */}
          <label>
            <input
              type="radio"
              name="sizemeGender"
              id="sizemeWoman"
              className="sizemeSelectSex"
              value="woman"
              onChange={(e) => setGender(e.target.value)}
              checked={gender === 'woman'}
            />
            <div className="sizemeSelectSexTab">{t('introduction2')}</div>
          </label>
        </div>

        <div className="heightAndWeightChoice">
          <Choice
            tabIndex={1}
            maxLength={true}
            title={t('introduction3')}
            setValue={setHeigtRangeValue}
            value={heightRangeValue}
          />
          <Choice
            tabIndex={2}
            maxLength={true}
            title={t('introduction4')}
            setValue={setWeightRangeValue}
            value={weightRangeValue}
          />
        </div>

        <div className="sizemeFitChoice">
          <Label className="fitchoiceText">{t('introduction5')}</Label>
          <div className="sizemeIntroductionSlider">
            <FitChoiceSlider
              fitChoice={fitChoice}
              setFitChoice={setFitChoice}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
