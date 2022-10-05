import React, { useState } from 'react';
import IconArrowLeft from '../svg/icon_arrow_left';
import IconMenu from '../svg/icon_menu';
import DropdownList from './DropdownList';
import Dropdown from 'react-dropdown';
import IconSquareArrowLeft from '../svg/icon_square_arrow_left';
import 'react-dropdown/style.css';
import IconLinkedin from '../svg/icon_linkedin';
import IconTwitter from '../svg/icon_twitter';
import IconInstagram from '../svg/icon_instagram';
import IconWorld from '../svg/icon_world';
import SocialMedia from '../socialMedia/SocialMedia';

import settingsStepNames from '../../constants/settingsStepNames';
import Button from '../customElement/Button';
import Popover from '../popover/Popover';

import { useTranslation } from 'react-i18next';

const ModalHeader = ({
  decreaseStep,
  visiblePrevStepIcon,
  hideMenuIcon,
  setSettingsStep,
  settingsStep,
  isLoggedIn,
  step,
  steps
}) => {
  const { t, i18n } = useTranslation();
  console.log(i18n.language);
  const [language, setLanguage] = useState('TR');
  console.log(settingsStep);
  const [isOpenDropdownList, setIsOpenDropdownList] = useState(false);
  const [isOpenPrivacy, setIsOpenPrivacy] = useState(false);

  console.log(step);
  const options = ['EN', 'TR'];
  const changeLanguage = () => {
    if (i18n.language === 'EN') i18n.changeLanguage('TR');
    else if (i18n.language === 'TR') i18n.changeLanguage('EN');
  };

  return (
    <div className="modalHeader">
      {visiblePrevStepIcon && (
        <IconSquareArrowLeft
          className={`prevStepIcon`}
          onClick={() => decreaseStep()}
        />
      )}

      {step !== steps.length - 1 &&
        settingsStep !== settingsStepNames.MANAGE_USERS && <SocialMedia />}

      <div className="sizeandmeHeaderRight">
        {step === 0 && (
          <div className="sizeandmeChangeLanguage" onClick={changeLanguage}>
            <IconWorld />
            <p style={{fontWeight: 400}}>{i18n.language}</p>
          </div>
        )}

        <Popover
          setIsOpen={setIsOpenPrivacy}
          className={`sizeandmePrivacy__popover sizeandmePrivacy__popover--${step}`}
          isOpen={isOpenPrivacy}
          content={
            <div
              className={`sizeandmePrivacyPopoverContent sizeandmePrivacyPopoverContent--${step}`}
              style={{
                textAlign: 'center',
                fontSize: '.7rem',
                cursor: 'default'
              }}
            >
              <span style={{fontWeight: 400}}>
                {t('headerPrivacy1')} <br></br>
                {t('headerPrivacy2')} <br></br> {t('headerPrivacy3')} <br></br>
                <a style={{fontWeight: 700}}
                  href="https://sizemeecommerce.s3.eu-west-3.amazonaws.com/6.%2BSize%26me%2BKVKK%2BPOL%C4%B0T%C4%B0KASI.pdf"
                  rel="noreferrer"
                  target="_blank"
                >
                  {' '}
                  {t('headerKVKK')}
                </a>
              </span>
            </div>
          }
        >
          <p
            className="sizemePrivacy"
            onClick={() => setIsOpenPrivacy(!isOpenPrivacy)}
          >
            {t('header1')}
          </p>
        </Popover>
      </div>

      <div className={`sizemeMenu ${!hideMenuIcon && 'hideMenuIcon'}`}>
        <IconMenu
          className={`menuIcon ${!hideMenuIcon && 'hideMenuIcon'}`}
          onClick={() => setIsOpenDropdownList(!isOpenDropdownList)}
        />

        <DropdownList
          isOpen={isOpenDropdownList}
          setSettingsStep={setSettingsStep}
          setIsOpenDropdownList={setIsOpenDropdownList}
          isLoggedIn={isLoggedIn}
        />
      </div>
    </div>
  );
};

export default ModalHeader;
