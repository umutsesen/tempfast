import React from 'react';
import InformPanel from '../InformPanel/InformPanel';
import IconSettings from '../svg/icon_settings';
import Button from '../customElement/Button';
import { useTranslation } from 'react-i18next';

const Settings = ({ gender, heightRangeValue }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="step sizemeSettings">
      <InformPanel gender={gender} heightRangeValue={heightRangeValue}>
        <IconSettings className={'sizemeSettingsIcon'} />
        <h3>{t('updateProfileText1')}</h3>
        <p>{t('updateProfileText2')}</p>
        <p>
        {t('updateProfileText3')}
        </p>
      </InformPanel>
      <div className="sizemeConfigureSettings">
        <h5>{t('updateProfileText4')}</h5>
        <p>{t('updateProfileText5')}</p>
        <Button>{t('updateProfileText4')}</Button>
      </div>
    </div>
  );
};

export default Settings;
