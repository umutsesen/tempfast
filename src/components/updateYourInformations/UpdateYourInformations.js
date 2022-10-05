import React, { useState, useEffect } from 'react';
import settingsUpdatedPartNames from '../../constants/settingsUpdatedPartNames';
import AnimatedBorderInput from '../customElement/AnimatedBorderInput';
import SelectBodyTypeSlider from '../selectBodyTypeSlider/SelectBodyTypeSlider';
import {
  manShoulderBodyType,
  manStomachBodyType,
  manHipBodyType,
  womanStomachBodyType,
  womanChestBodyType,
  womanHipBodyType
} from '../../constants/bodyTypes';
import { userInstance } from '../../axios';
import FitChoiceSlider from '../fitChoiceSlider/FitChoiceSlider';
import Button from '../customElement/Button';
import { useTranslation } from 'react-i18next';

const UpdateYourInformations = ({
  updatedPart,
  setUpdatedPart,
  heightRangeValue,
  setHeightRangeValue,
  weightRangeValue,
  setWeightRangeValue,
  fitChoice,
  setFitChoice,
  age,
  setAge,
  shoulderType,
  setShoulderType,
  stomachType,
  setStomachType,
  hipType,
  setHipType,
  chestType,
  setChestType,
  gender
}) => {
  const { t, i18n } = useTranslation();
  const [inputValue, setInputValue] = useState();
  const [bodyTypeValue, setBodyTypeValue] = useState();
  const [fitValue, setFitValue] = useState(fitChoice);

  useEffect(() => {
    setInputValue();
  }, [updatedPart]);

  const setTitle = () => {
    switch (updatedPart) {
      case settingsUpdatedPartNames.HEIGHT_RANGE:
        return t('updateYourInformations1');
      case settingsUpdatedPartNames.WEIGHT_RANGE:
        return t('updateYourInformations2');
      case settingsUpdatedPartNames.MAN_SHOULDER_TYPE:
        return t('updateYourInformations3');
      case settingsUpdatedPartNames.MAN_STOMACH_TYPE:
      case settingsUpdatedPartNames.WOMAN_STOMACH_TYPE:
        return t('updateYourInformations4');
      case settingsUpdatedPartNames.MAN_HIP_TYPE:
      case settingsUpdatedPartNames.WOMAN_HIP_TYPE:
        return t('updateYourInformations5');
      case settingsUpdatedPartNames.WOMAN_CHEST_TYPE:
        return t('updateYourInformations6');
      case settingsUpdatedPartNames.AGE:
        return t('updateYourInformations7');
      case settingsUpdatedPartNames.FIT_CHOICE:
        return t('updateYourInformations8');
      default:
        return;
    }
  };

  const showInputs = () => {
    switch (updatedPart) {
      case settingsUpdatedPartNames.HEIGHT_RANGE:
        console.log(inputValue);
        return (
          <AnimatedBorderInput
            type={'number'}
            value={
              inputValue === '' || inputValue ? inputValue : heightRangeValue
            }
            onChange={(e) => setInputValue(e.target.value)}
          />
        );
      case settingsUpdatedPartNames.WEIGHT_RANGE:
        return (
          <AnimatedBorderInput
            type={'number'}
            value={
              inputValue === '' || inputValue ? inputValue : weightRangeValue
            }
            onChange={(e) => setInputValue(e.target.value)}
          />
        );
      case settingsUpdatedPartNames.MAN_SHOULDER_TYPE:
        return (
          <SelectBodyTypeSlider
            bodyTypes={manShoulderBodyType}
            setBodyTypeValue={setBodyTypeValue}
            activeIndex={Number(shoulderType)}
          />
        );
      case settingsUpdatedPartNames.MAN_STOMACH_TYPE:
        return (
          <SelectBodyTypeSlider
            bodyTypes={manStomachBodyType}
            setBodyTypeValue={setBodyTypeValue}
            activeIndex={Number(stomachType)}
          />
        );
      case settingsUpdatedPartNames.WOMAN_STOMACH_TYPE:
        return (
          <SelectBodyTypeSlider
            bodyTypes={womanStomachBodyType}
            setBodyTypeValue={setBodyTypeValue}
            activeIndex={Number(stomachType)}
          />
        );
      case settingsUpdatedPartNames.MAN_HIP_TYPE:
        return (
          <SelectBodyTypeSlider
            bodyTypes={manHipBodyType}
            setBodyTypeValue={setBodyTypeValue}
            activeIndex={Number(hipType)}
          />
        );
      case settingsUpdatedPartNames.WOMAN_HIP_TYPE:
        return (
          <SelectBodyTypeSlider
            bodyTypes={womanHipBodyType}
            setBodyTypeValue={setBodyTypeValue}
            activeIndex={Number(hipType)}
          />
        );
      case settingsUpdatedPartNames.WOMAN_CHEST_TYPE:
        return (
          <SelectBodyTypeSlider
            bodyTypes={womanChestBodyType}
            setBodyTypeValue={setBodyTypeValue}
            activeIndex={Number(chestType)}
          />
        );
      case settingsUpdatedPartNames.AGE:
        return (
          <AnimatedBorderInput
            type={'number'}
            value={inputValue === '' || inputValue ? inputValue : age}
            onChange={(e) => setInputValue(e.target.value)}
          />
        );
      case settingsUpdatedPartNames.FIT_CHOICE:
        return (
          <FitChoiceSlider fitChoice={fitValue} setFitChoice={setFitValue} />
        );
      default:
        return;
    }
  };

  const saveChanges = async () => {
    const userKey = await localStorage.getItem('SizeAndMeUserKey');
    switch (updatedPart) {
      case settingsUpdatedPartNames.HEIGHT_RANGE:
        setHeightRangeValue(inputValue);
        try {
          const response = await userInstance.post(
            `/data/updateWidgetUserInformations/${userKey}`,
            {
              height: Number(inputValue)
            }
          );

          console.log(response.data);
        } catch (err) {
          alert(err);
        }
        return;
      case settingsUpdatedPartNames.WEIGHT_RANGE:
        setWeightRangeValue(inputValue);
        try {
          const response = await userInstance.post(
            `/data/updateWidgetUserInformations/${userKey}`,
            {
              weight: Number(inputValue)
            }
          );
          console.log(response.data);
        } catch (err) {
          alert(err);
        }

        return;
      case settingsUpdatedPartNames.MAN_SHOULDER_TYPE:
        setShoulderType(bodyTypeValue);
        try {
          const response = await userInstance.post(
            `/data/updateWidgetUserInformations/${userKey}`,
            {
              shoulderType: Number(bodyTypeValue)
            }
          );
          console.log(response.data);
        } catch (err) {
          alert(err);
        }

        return;
      case settingsUpdatedPartNames.MAN_STOMACH_TYPE:
      case settingsUpdatedPartNames.WOMAN_STOMACH_TYPE:
        setStomachType(bodyTypeValue);
        try {
          const response = await userInstance.post(
            `/data/updateWidgetUserInformations/${userKey}`,
            {
              waistType: Number(bodyTypeValue)
            }
          );
          console.log(response.data);
        } catch (err) {
          alert(err);
        }

        return;
      case settingsUpdatedPartNames.MAN_HIP_TYPE:
      case settingsUpdatedPartNames.WOMAN_HIP_TYPE:
        setHipType(bodyTypeValue);
        try {
          const response = await userInstance.post(
            `/data/updateWidgetUserInformations/${userKey}`,
            {
              hipType: Number(bodyTypeValue)
            }
          );
          console.log(response.data);
        } catch (err) {
          alert(err);
        }

        return;
      case settingsUpdatedPartNames.WOMAN_CHEST_TYPE:
        setChestType(bodyTypeValue);
        try {
          const response = await userInstance.post(
            `/data/updateWidgetUserInformations/${userKey}`,
            {
              shoulderType: Number(bodyTypeValue)
            }
          );
          console.log(response.data);
        } catch (err) {
          alert(err);
        }

        return;
      case settingsUpdatedPartNames.AGE:
        setAge(inputValue);
        try {
          const response = await userInstance.post(
            `/data/updateWidgetUserInformations/${userKey}`,
            {
              age: Number(inputValue)
            }
          );
          console.log(response.data);
        } catch (err) {
          alert(err);
        }

        return;
      case settingsUpdatedPartNames.FIT_CHOICE:
        setFitChoice(fitValue);
        return 'KALIP TERCİHİNİZ';
      default:
        return;
    }
  };

  return (
    <div
      className={`updateYourInformations ${
        !updatedPart && 'updateYourInformations-disable'
      }`}
    >
      <h6 style={{ marginBottom: '.5rem' }} id="updateInformationsTitle">{setTitle()}</h6>
      {showInputs()}
      <div className="updateYourInformationsActions">
        <Button
          onClick={async () => {
            saveChanges();
            setUpdatedPart();
          }}
        >
          {t('shared1')}
        </Button>
        <Button onClick={() => setUpdatedPart()} type="secondary">
          {t('shared2')}
        </Button>
      </div>
    </div>
  );
};

export default UpdateYourInformations;
