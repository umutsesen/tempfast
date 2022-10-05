import React, { useState, useEffect, useRef } from 'react';
import settingsUpdatedProfile from '../../constants/settingsUpdatedProfile';
import Button from '../customElement/Button';
import AnimatedBorderInput from '../customElement/AnimatedBorderInput';
import { loginInstance } from '../../axios';
import IconUserCircle from '../svg/icon_user_circle';
import IconEdit from '../svg/icon_edit';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

const UpdateYourProfileInformations = ({
  updated,
  setUpdated,
  userInfos,
  setUserInfos
}) => {
  const { t, i18n } = useTranslation();
  const [inputValue, setInputValue] = useState();
  const [selectedAvatar, setSelectedAvatar] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const selectAvatarRef = useRef();
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  console.log(inputValue);
  console.log(updated);
  console.log(userInfos);

  const selectFile = async (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      const fileUrl = await URL.createObjectURL(file);
      await setSelectedFile(file);
      await setSelectedAvatar(fileUrl);
     
    }
  };

  useEffect(() => {
    setOldPassword();
    setNewPassword();
    switch (updated) {
      case settingsUpdatedProfile.NAME:
        setInputValue(userInfos?.name ? userInfos?.name : '');
        break;
      case settingsUpdatedProfile.SURNAME:
        setInputValue(userInfos?.surname ? userInfos?.surname : '');
        break;

      case settingsUpdatedProfile.PHONE:
        setInputValue(userInfos?.phone ? userInfos?.phone : '');
        break;
      case settingsUpdatedProfile.EMAIL:
        setInputValue(userInfos?.email ? userInfos?.email : '');
        break;
      case settingsUpdatedProfile.PHOTO:
        setSelectedAvatar(userInfos?.avatar ? userInfos?.avatar : null);
        break;

      default:
        break;
    }

    return () => {
      setInputValue();
    };
  }, [updated]);

  const setTitle = () => {
    switch (updated) {
      case settingsUpdatedProfile.NAME:
        return t('updateYourProfileInformations1');
      case settingsUpdatedProfile.SURNAME:
        return t('updateYourProfileInformations2');
      case settingsUpdatedProfile.PHONE:
        return t('updateYourProfileInformations3');
      case settingsUpdatedProfile.PHOTO:
        return t('updateYourProfileInformations4');
      case settingsUpdatedProfile.EMAIL:
        return t('updateYourProfileInformations5');
      case settingsUpdatedProfile.CHANGE_PASSWORD:
        return t('updateYourProfileInformations6');
      default:
        return;
    }
  };

  const showInputs = () => {
    switch (updated) {
      case settingsUpdatedProfile.NAME:
        return (
          <AnimatedBorderInput
          className="width50"
            type={'text'}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        );

      case settingsUpdatedProfile.SURNAME:
        return (
          <AnimatedBorderInput
          className="width50"
            type={'text'}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        );
      case settingsUpdatedProfile.PHONE:
        return (
          <AnimatedBorderInput
          className="width50"
            type={'number'}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        );

      case settingsUpdatedProfile.EMAIL:
        return (
          <AnimatedBorderInput
          className="width50"
            type={'email'}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        );

      case settingsUpdatedProfile.PHOTO:
        return (
          <div className="sizemeChangeAvatarContainer">
            <input
              style={{ display: 'none' }}
              ref={selectAvatarRef}
              type="file"
              onChange={selectFile}
            />
            {selectedAvatar ? (
              <img
                className="sizemeChangeAvatarIcon sizemeRoundedImage"
                src={selectedAvatar}
              />
            ) : (
              <IconUserCircle className="sizemeChangeAvatarIcon" />
            )}

            <IconEdit
              className="sizemeAvatarEditIcon"
              onClick={() => selectAvatarRef.current.click()}
            />
          </div>
        );

      case settingsUpdatedProfile.CHANGE_PASSWORD:
        return (
          <div className="sizemeChangePasswordContainer">
            <label className="sizemeChangePasswordLabel">
              {t('updateYourProfileInformations7')}{' '}
            </label>
            <AnimatedBorderInput
          
              type={'password'}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />

            <label className="sizemeChangePasswordLabel">
              {t('updateYourProfileInformations8')}{' '}
            </label>
            <AnimatedBorderInput
          
              type={'password'}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
        );

      default:
        return;
    }
  };

  const saveChanges = async () => {
    const userKey = await localStorage.getItem('SizeAndMeUserKey');
    switch (updated) {
      case settingsUpdatedProfile.NAME:
        setUserInfos({ ...userInfos, name: inputValue });
        try {
          const response = await loginInstance.post(
            `/user/updateUserInfo`,
            { name: inputValue },
            { headers: { SizeAndMeUserKey: userKey } }
          );
        } catch (err) {
          throw err;
        }
        return;
      case settingsUpdatedProfile.SURNAME:
        setUserInfos({ ...userInfos, surname: inputValue });
        try {
          const response = await loginInstance.post(
            `/user/updateUserInfo`,
            { surname: inputValue },
            { headers: { SizeAndMeUserKey: userKey } }
          );
        } catch (err) {
          throw err;
        }
        return;
      case settingsUpdatedProfile.PHONE:
        setUserInfos({ ...userInfos, phone: inputValue });
        try {
          const response = await loginInstance.post(
            `/user/updateUserInfo`,
            { phone: inputValue },
            { headers: { SizeAndMeUserKey: userKey } }
          );
        } catch (err) {
          throw err;
        }
        return;
      case settingsUpdatedProfile.EMAIL:
        setUserInfos({ ...userInfos });
        try {
          const response = await loginInstance.post(
            `/auth/changeEmail`,
            { email: inputValue },
            { headers: { SizeAndMeUserKey: userKey } }
          );

          toast.success(
            t(response.data.message, {
              parameter: response.data.parameter
            }),
            { duration: 4000 }
          );
        } catch (err) {
          throw err;
        }
        return;
      case settingsUpdatedProfile.PHOTO:
        setUserInfos({ ...userInfos, avatar: selectedAvatar });
        try {
          const formData = new FormData();
          formData.append('avatar', selectedFile);
          const response = await loginInstance.post(
            `/user/changeAvatar`,
            formData,
            { headers: { SizeAndMeUserKey: userKey } }
          );
          console.log(response.data);
          setUpdated()
        } catch (err) {
          throw err;
        }
        return;
      case settingsUpdatedProfile.CHANGE_PASSWORD:
        try {
          const response = await loginInstance.post(
            `/auth/changePassword`,
            { oldPassword, newPassword },
            { headers: { SizeAndMeUserKey: userKey } }
          );

          toast.success(
            t(response.data.message, {
              parameter: response.data.parameter
            }),
            { duration: 4000 }
          );

          console.log(response.data);
        } catch (err) {
          throw err;
        }
        return;
      default:
        return;
    }
  };

  return (
    <>
      <div className={`updateYourInformations`}>
        <h6 style={{ marginBottom: '.5rem', fontSize: "1rem" }}>{setTitle()}</h6>
        {showInputs()}
        <div className="updateYourInformationsActions">
          <Button
            onClick={async () => {
              try {
                await saveChanges();
                setUpdated();
              } catch (err) {
                toast.error(t(err.response.data.error), { duration: 4000 });
              }
            }}
          >
            {t('shared1')}
          </Button>
          <Button onClick={() => setUpdated()} type="secondary">
            {t('shared2')}
          </Button>
        </div>
      </div>
    </>
  );
};

export default UpdateYourProfileInformations;
