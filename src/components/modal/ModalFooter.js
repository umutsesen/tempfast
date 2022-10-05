import React from 'react';
import IconArrowRight from '../svg/icon_arrow_right';
import Button from '../customElement/Button';
import { useTranslation } from 'react-i18next';
import IconSizeAndmeLogo from '../svg/icon_sizeandme_logo';
import IconSquareArrowRight from '../svg/icon_square_arrow_right';
import settingsStepNames from '../../constants/settingsStepNames';
import IconHanger from '../svg/icon_hanger';
import IconRepeat from '../svg/icon_repeat';
import IconAvatarFilled from '../svg/icon_avatar_filled';
import { userInstance } from '../../axios';

const ModalFooter = ({
  increaseStep,
  currentStep,
  steps,
  step,
  settingsStep,
  setSettingsStep,
  isLoggedIn,
  loading,
  setStep,
  continueOpacitiyLow,
  setGender,
  setHeightRangeValue,
  setWeightRangeValue,
  setFitChoice,
  setAge,
  setShoulderType,
  setStomachType,
  setHipType,
  setChestType,
  usersData
}) => {
  const { t, i18n } = useTranslation();

  const showActions = () => {
    console.log(settingsStep);

    if (!settingsStep) {
      if (currentStep === steps.length - 2) {
        return (
          <Button onClick={() => increaseStep()} iconRight={<IconHanger />}>
            {t('footer2')}
          </Button>
        );
      } else if (currentStep === steps.length - 1) {
        return (
          <Button
            onClick={() => setStep(0)}
            className="hoverButtonEffect"
            iconRight={<IconRepeat />}
          >
            {t('footer3')}
          </Button>
        );
      }

      return (
        // <div
        //   className={`nextStep ${
        //     continueOpacitiyLow ? 'nextStep-opacityLow' : ''
        //   }`}
        //   onClick={() => increaseStep()}
        // >
        //   <h5 style={{ color: 'black' }}>{t('footer1')}</h5>
        //   <IconArrowRight className="nextStepIcon" />
        // </div>
        <Button
          onClick={() => increaseStep()}
          iconRight={<IconSquareArrowRight />}
          disabled={continueOpacitiyLow}
        >
          {t('footer1')}
        </Button>
      );
    } else if (settingsStep) {
      return (
        <Button
          iconLeft={<IconAvatarFilled />}
          onClick={async () => {
            try {
              await userInstance.post('/data/createUserProfile', {
                userKey: usersData[0].key,
                userId: usersData[0].user
              });
              //for touche
             /*  setGender(null); */
              setHeightRangeValue(165);
              setWeightRangeValue(80);
              setFitChoice(50);
              setAge(18);
              setShoulderType(null);
              setStomachType(null);
              setHipType(null);
              setChestType(null);
              setSettingsStep(null);
              setStep(0);
            } catch (err) {
              alert(err.response.data.err);
            }
          }}
        >
          {t('manageUsers7')}
        </Button>
      );
    }
  };

  return (
    <div className="modalFooter">
      <div className="sizeandmePoweredLogo">
        {/* <p>Powered by</p>
        <img
          src="https://customerssizeandme.s3.eu-central-1.amazonaws.com/reactFast_Size%26Logo.png"
          className="sizeandmeImage"
          alt="sizeandmeLogo"
        /> */}
        <IconSizeAndmeLogo />
      </div>
      <div className="modalFooter__right">
{/*         {step === steps.length - 1 && !settingsStep && (
          <Button type="secondary" id="addtocardsizeandme">{t('sepeteekle')}</Button>
        )} */}
        {step === 0 &&
        settingsStep !== settingsStepNames.HAVE_ACCOUNT &&
        settingsStep !== settingsStepNames.MANAGE_USERS ? (
          null
        ) : null}

        {showActions()}
      </div>
    </div>
  );
};

export default ModalFooter;

/*
<>
            {!isLoggedIn.loggedIn && (
              <Button
                type="secondary"
                id="haveaccountsizeandme"
                onClick={() => {
                  if (!isLoggedIn.loggedIn)
                    setSettingsStep(settingsStepNames.HAVE_ACCOUNT);
                }}
              >
                {t('introduction6')}
              </Button>
            )}
          </>
*/