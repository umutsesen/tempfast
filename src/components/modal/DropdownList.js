import React, { useEffect, useRef } from 'react';
import IconSettings from '../svg/icon_settings';
import IconUser from '../svg/icon_user';
import IconClipboardList from '../svg/icon_clipboard_list';
import { CSSTransition } from 'react-transition-group';
import settingsStepNames from '../../constants/settingsStepNames';
import { useTranslation } from 'react-i18next';
import IconBodyScan from '../svg/icon_body_scan';
import IconAvatarFilled from '../svg/icon_avatar_filled';
import IconUserEdit from '../svg/icon_user_edit';

const DropdownList = ({
  isOpen,
  setSettingsStep,
  setIsOpenDropdownList,
  isLoggedIn
}) => {
  const { t, i18n } = useTranslation();
  const wrapperRef = useRef(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (
        event.target?.classList.contains('menuIcon') ||
        event.target?.classList.contains('menuIconPath')
      )
        return;
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpenDropdownList(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  const changeSettingsStep = (settingsStep) => {
    setSettingsStep(settingsStep);
    setIsOpenDropdownList(false);
  };

  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames={'sizeme-dropdown-fade'}
      unmountOnExit
    >
      <ul className="sizemeDropdown" ref={wrapperRef}>
        {/* <div class="sizemeDropdownArrowUp"></div> */}
        <li
          onClick={() =>
            changeSettingsStep(settingsStepNames.YOUR_INFORMATIONS)
          }
        >
          <div className="sizemeDropdownListTitle">
            <IconBodyScan className="sizemeDropdownListIcon" />
            <h5 className="dropdownTitle">{t('menu1_1')}</h5>
          </div>
          <p className="dropdownText">{t('menu1_2')}</p>
        </li>
        {/* <li onClick={() => changeSettingsStep(settingsStepNames.SETTINGS)}>
          <IconSettings className="sizemeDropdownListIcon" />
          <div className="sizemeDropdownListText">
            <h5>Ayarlar</h5>
            <p>Otomatik önerileri aç veya kapat, ya da kullanıcıyı sil</p>
          </div>
        </li> */}
        <li onClick={() => changeSettingsStep(settingsStepNames.MANAGE_USERS)}>
          <div className="sizemeDropdownListTitle">
            <IconAvatarFilled className="sizemeDropdownListIcon" />
            <h5 className="dropdownTitle">{t('menu2_1')}</h5>
          </div>
          <p className="dropdownText">{t('menu2_2')}</p>
        </li>
        {isLoggedIn.loggedIn && (
          <li
            onClick={() =>
              changeSettingsStep(settingsStepNames.PROFILE_INFORMATIONS)
            }
          >
            <div className="sizemeDropdownListTitle">
              <IconUserEdit className="sizemeDropdownListIcon" />
              <h5 className="dropdownTitle">{t('menu3_1')}</h5>
            </div>
            <p className="dropdownText">{t('menu3_2')}</p>
          </li>
        )}
      </ul>
    </CSSTransition>
  );
};

export default DropdownList;
