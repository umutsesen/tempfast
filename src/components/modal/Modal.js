import React, { useState, useEffect } from "react";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import IconCloseCircleFilled from "../svg/icon_close_circle_filled";
import SelectManShoulderType from "../steps/SelectManShoulderType";
import SelectManStomachType from "../steps/SelectManStomachType";
import SelectManHipType from "../steps/SelectManHipType";
import SelectWomanChestType from "../steps/SelectWomanChestType";
import SelectWomanStomachType from "../steps/SelectWomanStomachType";
import SelectWomanHipType from "../steps/SelectWomanHipType";
import AgeInformation from "../steps/AgeInformation";
import YourInformations from "../settingsSteps/YourInformations";
import Introduction from "../steps/Introduction";
import ProfileInformations from "../settingsSteps/ProfileInformations";
import Settings from "../settingsSteps/Settings";
import ManageUsers from "../settingsSteps/ManageUsers";
import settingsStepNames from "../../constants/settingsStepNames";
import BodySizeInformation from "../steps/BodySizeInformation";
import Login from "../settingsSteps/Login";
import IconExclamationTriangle from "../svg/icon_exclamation_triangle";
import { useTranslation } from "react-i18next";
import Popover from "../popover/Popover";
import { userInstance, loginInstance } from "../../axios";
import Lottie, { useLottie } from "lottie-react";
import data4 from "../../data4.json";

import ForgotPassword from "../settingsSteps/ForgotPassword";
import useAuth from "../../hooks/useAuth";

const Modal = ({ isOpen, setIsModalOpen, bodyPart }) => {
  const { t, i18n } = useTranslation();
  const [step, setStep] = useState(0);
  const [visiblePrevStepIcon, setVisiblePrevStepIcon] = useState(false);
  const [hideMenuIcon, setHideMenuIcon] = useState(false);
  // const [settingsStep, setSettingsStep] = useState(null);
  const [gender, setGender] = useState("woman");
  const [heightRangeValue, setHeigtRangeValue] = useState("165");
  const [weightRangeValue, setWeightRangeValue] = useState("60");
  const [fitChoice, setFitChoice] = useState(50);
  const [age, setAge] = useState(18);
  const [shoulderType, setShoulderType] = useState(null);
  const [stomachType, setStomachType] = useState(null);
  const [hipType, setHipType] = useState(null);
  const [chestType, setChestType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [continueOpacitiyLow, setContinueOpacitiyLow] = useState(true);
  const [isWarningPopoverOpen, setIsWarningPopoverOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [settingsStep, setSettingsStep] = useState(null);
  const [userInfos, setUserInfos] = useState(null);
  const [modalLoading, setModalLoading] = useState(true);
  const [usersData, setUsersData] = useState([]);
  const [userHasBeforeInformation, setUserHasBeforeInformation] =
    useState(false);
  const { auth } = useAuth();

  useEffect(() => {
    if (isOpen) {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        setHipType(1);
        setChestType(1);
        setStomachType(1);
        setShoulderType(1);
      }

      (async () => {
        const userKey = await localStorage.getItem("SizeAndMeUserKey");
        if (!userKey) {
          try {
            const getKeyResponse = await userInstance.get("data/getKey");
            console.log(getKeyResponse.data.key);
            await localStorage.setItem(
              "SizeAndMeUserKey",
              getKeyResponse.data.key
            );
            setModalLoading(false);
          } catch (err) {
            alert(err);
            setModalLoading(false);
          }
        } else {
          // TODO: şimdilik kalsın
          // const userSizeModel = await axios.get(
          //   `/data/getUsersSizeModel/${userKey}`
          // );
          // console.log(userSizeModel.data);
          // setInitialDatas(userSizeModel.data);
          // setInitialStep(4);

          try {
            const userExistsResponse = await loginInstance.get(
              `/user/loggedInOrExists/${userKey}`
            );

            console.log(userExistsResponse.data);

            const userExists = userExistsResponse.data.userExists;
            const isLoggedIn = userExistsResponse.data.isLoggedIn;
            const verified = userExistsResponse.data.verified;
            const expireDate = userExistsResponse?.data?.expireDate;

            setIsLoggedIn({ loggedIn: isLoggedIn, verified, expireDate });

            if (isLoggedIn) {
              const responseUserInfos = await loginInstance.get(
                "/user/retrieveUserInfos",
                {
                  headers: {
                    SizeAndMeUserKey: userKey
                  }
                }
              );

              setUserInfos(responseUserInfos.data);
            }

            if (userExists) setSettingsStep(settingsStepNames.MANAGE_USERS);
            // if user is mobile set default values because of SWIPER_TEXT

            setModalLoading(false);
          } catch (err) {
            alert(err);
            setModalLoading(false);
          }
        }
      })();
    }
    console.log(step);

    return () => {
      setTimeout(() => {
        if (isOpen) {
          console.log("is open");
          setStep(0);
          setModalLoading(true);
        }
      }, 300);
    };
  }, [isOpen]);

  // useEffect(() => {
  //   setGender(
  //     initialDatas !== null
  //       ? initialDatas.sex === 'Kadin'
  //         ? 'woman'
  //         : 'man'
  //       : null
  //   );
  //   setHeigtRangeValue(initialDatas !== null ? initialDatas.height : null);
  //   setWeightRangeValue(initialDatas !== null ? initialDatas.weight : null);
  //   setAge(initialDatas !== null ? initialDatas.age : 18);
  //   setShoulderType(initialDatas !== null ? 1 : null);
  //   setStomachType(initialDatas !== null ? 1 : null);
  //   setHipType(initialDatas !== null ? 1 : null);
  //   setChestType(initialDatas !== null ? 1 : null);
  //   setStep(initialStep);
  // }, [initialDatas, initialStep]);

  let steps = [
    <Introduction
      setGender={setGender}
      gender={gender}
      setHeigtRangeValue={setHeigtRangeValue}
      setWeightRangeValue={setWeightRangeValue}
      fitChoice={fitChoice}
      setFitChoice={setFitChoice}
      heightRangeValue={heightRangeValue}
      weightRangeValue={weightRangeValue}
    />
  ];

  console.log(gender);
  console.log(bodyPart);
  if (bodyPart === "upper" && gender === "man")
    steps = [
      ...steps,
      <SelectManShoulderType
        title={t("modal1")}
        shoulderType={shoulderType}
        setShoulderType={setShoulderType}
      />,
      <SelectManStomachType
        title={t("modal22")}
        stomachType={stomachType}
        setStomachType={setStomachType}
      />
    ];
  else if (bodyPart === "lower" && gender === "man")
    steps = [
      ...steps,
      <SelectManStomachType
        title={t("modal22")}
        stomachType={stomachType}
        setStomachType={setStomachType}
      />,
      <SelectManHipType
        title={t("modal33")}
        hipType={hipType}
        setHipType={setHipType}
      />
    ];
  else if (bodyPart === "upper" && gender === "woman")
    steps = [
      ...steps,
      <SelectWomanChestType
        title={t("modal44")}
        chestType={chestType}
        setChestType={setChestType}
      />,
      <SelectWomanStomachType
        title={t("modal22")}
        stomachType={stomachType}
        setStomachType={setStomachType}
      />
    ];
  else if (bodyPart === "lower" && gender === "woman")
    steps = [
      ...steps,
      <SelectWomanStomachType
        title={t("modal22")}
        stomachType={stomachType}
        setStomachType={setStomachType}
      />,
      <SelectWomanHipType
        title={t("modal33")}
        hipType={hipType}
        setHipType={setHipType}
      />
    ];

  steps = [
    ...steps,
    <AgeInformation age={age} setAge={setAge} />,
    <BodySizeInformation
      setSettingStep={setSettingsStep}
      setIsLoggedIn={setIsLoggedIn}
      gender={gender}
      heightRangeValue={heightRangeValue}
      weightRangeValue={weightRangeValue}
      fitChoice={fitChoice}
      age={age}
      shoulderType={shoulderType}
      stomachType={stomachType}
      hipType={hipType}
      chestType={chestType}
      bodyPart={bodyPart}
      loading={loading}
      setLoading={setLoading}
      isLoggedIn={isLoggedIn}
      setUserInfos={setUserInfos}
      userInfos={userInfos}
      userHasBeforeInformation={userHasBeforeInformation}
    />
  ];
  console.log(steps);

  useEffect(() => {
    if (step !== 0) setVisiblePrevStepIcon(true);
    else if (step === 0) setVisiblePrevStepIcon(false);
    if (step === 0 && settingsStep) {
      setVisiblePrevStepIcon(true);
    }

    if (step === steps.length - 1 && steps.length !== 1) setHideMenuIcon(true);
    else setHideMenuIcon(false);
  }, [step, settingsStep]);

  const increaseStep = () => {
    if (
      steps.length - 1 !== step &&
      gender &&
      heightRangeValue &&
      weightRangeValue &&
      step !== 1 &&
      step !== 2
    )
      setStep(step + 1);
    else if (step === 1 && (shoulderType || stomachType || chestType))
      setStep(step + 1);
    else if (step === 2 && (stomachType || hipType)) setStep(step + 1);

    return;
  };

  const decreaseStep = () => {
    if (step !== 0 && !settingsStep) setStep(step - 1);

    if (settingsStep) setSettingsStep(null);

    return;
  };

  useEffect(() => {
    if (step === 0 && gender && heightRangeValue && weightRangeValue)
      setContinueOpacitiyLow(false);
    else if (step === 1 && (shoulderType || stomachType || chestType))
      setContinueOpacitiyLow(false);
    else if (step === 2 && (stomachType || hipType))
      setContinueOpacitiyLow(false);
    else setContinueOpacitiyLow(true);
  }, [
    step,
    gender,
    heightRangeValue,
    weightRangeValue,
    shoulderType,
    stomachType,
    chestType,
    hipType
  ]);

  const showSettingsStep = () => {
    if (settingsStep === settingsStepNames.YOUR_INFORMATIONS)
      return (
        <YourInformations
          gender={gender}
          heightRangeValue={heightRangeValue}
          setHeightRangeValue={setHeigtRangeValue}
          weightRangeValue={weightRangeValue}
          setWeightRangeValue={setWeightRangeValue}
          fitChoice={fitChoice}
          setFitChoice={setFitChoice}
          age={age}
          setAge={setAge}
          shoulderType={shoulderType}
          setShoulderType={setShoulderType}
          stomachType={stomachType}
          setStomachType={setStomachType}
          hipType={hipType}
          setHipType={hipType}
          chestType={chestType}
          setChestType={setChestType}
          bodyPart={bodyPart}
        />
      );
    // else if (settingsStep === settingsStepNames.SETTINGS)
    // return <Settings gender={gender} heightRangeValue={heightRangeValue} />;
    else if (settingsStep === settingsStepNames.MANAGE_USERS)
      return (
        <ManageUsers
          setStep={setStep}
          gender={gender}
          setGender={setGender}
          setHeightRangeValue={setHeigtRangeValue}
          setWeightRangeValue={setWeightRangeValue}
          setFitChoice={setFitChoice}
          setAge={setAge}
          setShoulderType={setShoulderType}
          setStomachType={setStomachType}
          setHipType={setHipType}
          setChestType={setChestType}
          setSettingsStep={setSettingsStep}
          data={usersData}
          setData={setUsersData}
          setUserHasBeforeInformation={setUserHasBeforeInformation}
          bodyPart={bodyPart}
        />
      );
    else if (settingsStep === settingsStepNames.PROFILE_INFORMATIONS)
      return (
        <ProfileInformations
          userInfos={userInfos}
          setUserInfos={setUserInfos}
          gender={gender}
          heightRangeValue={heightRangeValue}
        />
      );
    else if (settingsStep === settingsStepNames.FORGOT_PASSWORD)
      return <ForgotPassword />;

    return (
      <Login
        setSettingsStep={setSettingsStep}
        setIsLoggedIn={setIsLoggedIn}
        setUserInfos={setUserInfos}
      />
    );
  };

  return (
    <>
      <CSSTransition
        key={2}
        in={isOpen}
        timeout={300}
        classNames="animate__animated animate__fadeIn animationduration"
        unmountOnExit
      >
        <div
          className="sizemewidget__modal__overlay"
          id="sizeandmewidgetOverlay"
        >
          {modalLoading ? (
            // <img
            //   src="https://sizemeecommerce.s3.eu-west-3.amazonaws.com/animation_300_kuseozyq.gif"
            //   className="sizeandmeLoading"
            // />
            <Lottie
              animationData={data4}
              loop
              renderer="svg"
              autoplay
              className="sizeandmeLoadingAnimation"
            />
          ) : (
            <div className="sizemewidget__modal__content">
              <IconCloseCircleFilled
                className="modalCloseIcon"
                onClick={() => {
                  document
                    .getElementById("sizeandmewidgetOverlay")
                    .classList.add(
                      "animate__animated",
                      "animate__fadeOut",
                      "animationduration"
                    );
                  setTimeout(() => {
                    setIsModalOpen(false);
                  }, 300);
                }}
              />

              {!isLoggedIn.verified && isLoggedIn.loggedIn && (
                <Popover
                  className="sizeAndMeWarningPopover"
                  isOpen={isWarningPopoverOpen}
                  setIsOpen={setIsWarningPopoverOpen}
                  content={
                    <div className="sizemeWarningPopoverContent">
                      <p>{t("verify1")}</p>
                      <p>
                        {t("verify2")} {isLoggedIn.expireDate}
                      </p>
                    </div>
                  }
                >
                  <IconExclamationTriangle
                    className="modalWarningIcon"
                    onClick={() =>
                      setIsWarningPopoverOpen(!isWarningPopoverOpen)
                    }
                  />
                </Popover>
              )}
              <ModalHeader
                decreaseStep={decreaseStep}
                visiblePrevStepIcon={visiblePrevStepIcon}
                hideMenuIcon={hideMenuIcon}
                setSettingsStep={setSettingsStep}
                settingsStep={settingsStep}
                isLoggedIn={isLoggedIn}
                step={step}
                steps={steps}
              />
              <div className="modalSteps">
                {/* <SwitchTransition mode="out-in">
              <CSSTransition
                key={[settingsStep, step]}
                timeout={500}
                classNames="sizemeWidgetSteps"
                unmountOnExit
                mountOnEnter
              >
                {!settingsStep ? steps[step] : showSettingsStep()}
              </CSSTransition>
            </SwitchTransition> */}
                <SwitchTransition mode="out-in">
                  <CSSTransition
                    key={[settingsStep, step]}
                    timeout={500}
                    classNames="sizemeFade"
                    unmountOnExit
                    mountOnEnter
                  >
                    {/* {steps[step]} */}
                    {!settingsStep ? steps[step] : showSettingsStep()}
                  </CSSTransition>
                </SwitchTransition>
              </div>
              <ModalFooter
                isLoggedIn={isLoggedIn}
                increaseStep={increaseStep}
                currentStep={step}
                steps={steps}
                settingsStep={settingsStep}
                loading={loading}
                setStep={setStep}
                continueOpacitiyLow={continueOpacitiyLow}
                step={step}
                setSettingsStep={setSettingsStep}
                setGender={setGender}
                setHeightRangeValue={setHeigtRangeValue}
                setWeightRangeValue={setWeightRangeValue}
                setFitChoice={setFitChoice}
                setAge={setAge}
                setShoulderType={setShoulderType}
                setStomachType={setStomachType}
                setHipType={setHipType}
                setChestType={setChestType}
                usersData={usersData}
              />
            </div>
          )}
        </div>
      </CSSTransition>
    </>
  );
};

export default Modal;
