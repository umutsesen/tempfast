import React, { useState } from 'react';
import InformPanel from '../InformPanel/InformPanel';
import IconClipBoardList from '../svg/icon_clipboard_list';
import settingsUpdatedProfile from '../../constants/settingsUpdatedProfile';
import UpdateYourInformations from '../updateYourInformations/UpdateYourInformations';
import UpdateYourProfileInformations from '../updateYourProfileInformations/UpdateYourProfileInformations';
import { useTranslation } from 'react-i18next';
import IconUserCircle from '../svg/icon_user_circle';
import LabelButton from '../customElement/LabelButton';
import IconImport from '../svg/icon_import';

const ProfileInformations = ({
  gender,
  heightRangeValue,
  userInfos,
  setUserInfos
}) => {
  const { t, i18n } = useTranslation();
  const [updated, setUpdated] = useState();

  console.log(userInfos);

  return (
    <div className="step  sizemeYourProfileInformations">
      {!updated ? (
        <div className={`sizemeChangeProfileInformations `}>
          <div
            className="sizemeInformationsProfileRow"
            onClick={() => setUpdated(settingsUpdatedProfile.NAME)}
          >
            {/* <p className="sizemeInformationsKey">{t('profileInformations1')}</p>
          <p className="sizemeInformationsValue">{userInfos?.name}</p> */}
            <LabelButton>{t('profileInformations1')}</LabelButton>
            <LabelButton bold bottomRight>
              {userInfos?.name}
            </LabelButton>
          </div>
          <div
            className="sizemeInformationsProfileRow"
            onClick={() => setUpdated(settingsUpdatedProfile.SURNAME)}
          >
            {/* <p className="sizemeInformationsKey">{t('profileInformations2')}</p>
          <p className="sizemeInformationsValue">{userInfos?.surname}</p> */}
            <LabelButton>{t('profileInformations2')}</LabelButton>
            <LabelButton bold bottomRight>
              {userInfos?.surname}
            </LabelButton>
          </div>
          <div
            className="sizemeInformationsProfileRow"
            onClick={() => setUpdated(settingsUpdatedProfile.PHONE)}
          >
            {/* <p className="sizemeInformationsKey">{t('profileInformations3')}</p>
          <p className="sizemeInformationsValue">{userInfos?.phone}</p> */}
            <LabelButton>{t('profileInformations3')}</LabelButton>
            <LabelButton bold bottomRight>
              {userInfos?.phone}
            </LabelButton>
          </div>
          <div
            className="sizemeInformationsProfileRow"
            onClick={() => setUpdated(settingsUpdatedProfile.PHOTO)}
          >
            {/* <p className="sizemeInformationsKey">{t('profileInformations4')}</p> */}
            <LabelButton>{t('profileInformations4')}</LabelButton>
            {userInfos?.avatar ? (
              <img
                className="sizemeInformationsValue sizemeAvatar"
                src={userInfos?.avatar}
                width="50px"
              />
            ) : (
              <IconImport />
            )}
          </div>
          <div
            className="sizemeInformationsProfileRow"
            onClick={() => setUpdated(settingsUpdatedProfile.EMAIL)}
          >
            {/* <p className="sizemeInformationsKey">Email</p>
          <p className="sizemeInformationsValue">{userInfos?.email}</p> */}
            <LabelButton>Email</LabelButton>
            <LabelButton bottomRight bold>
              {userInfos?.email}
            </LabelButton>
          </div>
          <div
            className="sizemeInformationsProfileRow"
            onClick={() => setUpdated(settingsUpdatedProfile.CHANGE_PASSWORD)}
          >
            {/* <p className="sizemeInformationsKey">{t('profileInformations5')}</p> */}
            <LabelButton>{t('profileInformations5')}</LabelButton>
          </div>
        </div>
      ) : (
        <UpdateYourProfileInformations
          updated={updated}
          setUpdated={setUpdated}
          userInfos={userInfos}
          setUserInfos={setUserInfos}
        />
      )}
    </div>
  );
};

export default ProfileInformations;
