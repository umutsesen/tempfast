import React, { useState } from "react";
import IconClipBoardList from "../svg/icon_clipboard_list";
import settingsUpdatedPartNames from "../../constants/settingsUpdatedPartNames";
import UpdateYourInformations from "../updateYourInformations/UpdateYourInformations";
import InformPanel from "../InformPanel/InformPanel";
import { useTranslation } from "react-i18next";
import LabelButton from "../customElement/LabelButton";

const YourInformations = ({
  gender,
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
  bodyPart
}) => {
  const [updatedPart, setUpdatedPart] = useState();
  const { t, i18n } = useTranslation();

  return (
    <div className="step sizemeYourInformations">
      {!updatedPart && (
        <InformPanel>
          <h3>{t("yourInformations1")}</h3>
          <hr />
          <p>
            {/* {bodyPart === 'upper' ? 'Üst giyim' : 'Alt giyim'}  */}
            {t("yourInformations2")}{" "}
          </p>
          <hr />
          {/*    <p>{t('yourInformations3')} </p> */}
        </InformPanel>
      )}

      <div
        className={`sizemeChangeInformations ${
          updatedPart
            ? "sizemeChangeInformations-disable sizemeChangeInformations-left"
            : ""
        }`}
      >
        <div className="sizemeInformationsRow">
          {/* <p className="sizemeInformationsKey">{t('yourInformations14')}</p>
          <p className="sizemeInformationsValue">
            {gender === 'man' ? t('yourInformations4') : t('yourInformations5')}
          </p> */}
          <LabelButton>{t("yourInformations14")}</LabelButton>
          <LabelButton bottomRight bold>
            {gender === "man" ? t("yourInformations4") : t("yourInformations5")}
          </LabelButton>
        </div>
        <div
          className="sizemeInformationsRow"
          onClick={() => setUpdatedPart(settingsUpdatedPartNames.HEIGHT_RANGE)}
        >
          {/* <p className="sizemeInformationsKey">{t('yourInformations6')}</p>
          <p className="sizemeInformationsValue">{heightRangeValue} cm</p> */}
          <LabelButton>{t("yourInformations6")}</LabelButton>
          <LabelButton bottomRight bold>
            {heightRangeValue} cm
          </LabelButton>
        </div>
        <div
          className="sizemeInformationsRow"
          onClick={() => setUpdatedPart(settingsUpdatedPartNames.WEIGHT_RANGE)}
        >
          {/* <p className="sizemeInformationsKey">{t('yourInformations7')}</p>
          <p className="sizemeInformationsValue">{weightRangeValue} kg</p> */}
          <LabelButton>{t("yourInformations7")}</LabelButton>
          <LabelButton bottomRight bold>
            {weightRangeValue} kg
          </LabelButton>
        </div>
        {bodyPart === "upper" && gender === "man" && (
          <>
            <div
              className="sizemeInformationsRow"
              onClick={() =>
                setUpdatedPart(settingsUpdatedPartNames.MAN_SHOULDER_TYPE)
              }
            >
              {/* <p className="sizemeInformationsKey">{t('yourInformations8')}</p>
              <p className="sizemeInformationsValue">
                {Number(shoulderType) === 1
                  ? t('Flatter')
                  : Number(shoulderType) === 2
                  ? t('Normal')
                  : t('Curvier')}
              </p> */}
              <LabelButton>{t("yourInformations8")}</LabelButton>
              <LabelButton bottomRight bold>
                {Number(shoulderType) === 1
                  ? t("Flatter")
                  : Number(shoulderType) === 2
                  ? t("Normal")
                  : t("Curvier")}
              </LabelButton>
            </div>
            <div
              className="sizemeInformationsRow"
              onClick={() =>
                setUpdatedPart(settingsUpdatedPartNames.MAN_STOMACH_TYPE)
              }
            >
              {/* <p className="sizemeInformationsKey">{t('yourInformations9')}</p>
              <p className="sizemeInformationsValue">
                {Number(stomachType) === 1
                  ? t('Flatter')
                  : Number(stomachType) === 2
                  ? t('Normal')
                  : t('Curvier')}
              </p> */}
              <LabelButton>{t("yourInformations9")}</LabelButton>
              <LabelButton bottomRight bold>
                {Number(stomachType) === 1
                  ? t("Flatter")
                  : Number(stomachType) === 2
                  ? t("Normal")
                  : t("Curvier")}
              </LabelButton>
            </div>
          </>
        )}
        {bodyPart === "lower" && gender === "man" && (
          <>
            <div
              className="sizemeInformationsRow"
              onClick={() =>
                setUpdatedPart(settingsUpdatedPartNames.MAN_STOMACH_TYPE)
              }
            >
              {/* <p className="sizemeInformationsKey">{t('yourInformations9')}</p>
              <p className="sizemeInformationsValue asd">
                {Number(stomachType) === 1
                  ? t('Flatter')
                  : Number(stomachType) === 2
                  ? t('Normal')
                  : t('Curvier')}
              </p> */}
              <LabelButton>{t("yourInformations9")}</LabelButton>
              <LabelButton bottomRight bold>
                {Number(stomachType) === 1
                  ? t("Flatter")
                  : Number(stomachType) === 2
                  ? t("Normal")
                  : t("Curvier")}
              </LabelButton>
            </div>
            <div
              className="sizemeInformationsRow"
              onClick={() =>
                setUpdatedPart(settingsUpdatedPartNames.MAN_HIP_TYPE)
              }
            >
              {/* <p className="sizemeInformationsKey">{t('yourInformations10')}</p>
              <p className="sizemeInformationsValue">
                {Number(hipType) === 1
                  ? t('Flatter')
                  : Number(hipType) === 2
                  ? t('Normal')
                  : t('Curvier')}
              </p> */}
              <LabelButton>{t("yourInformations10")}</LabelButton>
              <LabelButton bottomRight bold>
                {Number(hipType) === 1
                  ? t("Flatter")
                  : Number(hipType) === 2
                  ? t("Normal")
                  : t("Curvier")}
              </LabelButton>
            </div>
          </>
        )}
        {bodyPart === "upper" && gender === "woman" && (
          <>
            <div
              className="sizemeInformationsRow"
              onClick={() =>
                setUpdatedPart(settingsUpdatedPartNames.WOMAN_CHEST_TYPE)
              }
            >
              {/* <p className="sizemeInformationsKey">{t('yourInformations11')}</p>
              <p className="sizemeInformationsValue">
                {Number(chestType) === 1
                  ? t('Flatter')
                  : Number(chestType) === 2
                  ? t('Normal')
                  : t('Curvier')}
              </p> */}
              <LabelButton>{t("yourInformations11")}</LabelButton>
              <LabelButton bottomRight bold>
                {Number(chestType) === 1
                  ? t("Flatter")
                  : Number(chestType) === 2
                  ? t("Normal")
                  : t("Curvier")}
              </LabelButton>
            </div>
            <div
              className="sizemeInformationsRow"
              onClick={() =>
                setUpdatedPart(settingsUpdatedPartNames.WOMAN_STOMACH_TYPE)
              }
            >
              {/* <p className="sizemeInformationsKey">{t('yourInformations9')}</p>
              <p className="sizemeInformationsValue">
                {Number(stomachType) === 1
                  ? t('Flatter')
                  : Number(stomachType) === 2
                  ? t('Normal')
                  : t('Curvier')}
              </p> */}
              <LabelButton>{t("yourInformations9")}</LabelButton>
              <LabelButton bottomRight bold>
                {Number(stomachType) === 1
                  ? t("Flatter")
                  : Number(stomachType) === 2
                  ? t("Normal")
                  : t("Curvier")}
              </LabelButton>
            </div>
          </>
        )}
        {bodyPart === "lower" && gender === "woman" && (
          <>
            <div
              className="sizemeInformationsRow"
              onClick={() =>
                setUpdatedPart(settingsUpdatedPartNames.WOMAN_STOMACH_TYPE)
              }
            >
              {/* <p className="sizemeInformationsKey">{t('yourInformations9')}</p>
              <p className="sizemeInformationsValue">
                {Number(stomachType) === 1
                  ? t('Flatter')
                  : Number(stomachType) === 2
                  ? t('Normal')
                  : t('Curvier')}
              </p> */}
              <LabelButton>{t("yourInformations9")}</LabelButton>
              <LabelButton bottomRight bold>
                {Number(stomachType) === 1
                  ? t("Flatter")
                  : Number(stomachType) === 2
                  ? t("Normal")
                  : t("Curvier")}
              </LabelButton>
            </div>
            <div
              className="sizemeInformationsRow"
              onClick={() =>
                setUpdatedPart(settingsUpdatedPartNames.WOMAN_HIP_TYPE)
              }
            >
              {/* <p className="sizemeInformationsKey">{t('yourInformations10')}</p>
              <p className="sizemeInformationsValue">
                {Number(hipType) === 1
                  ? t('Flatter')
                  : Number(hipType) === 2
                  ? t('Normal')
                  : t('Curvier')}
              </p> */}
              <LabelButton>{t("yourInformations10")}</LabelButton>
              <LabelButton bottomRight bold>
                {Number(hipType) === 1
                  ? t("Flatter")
                  : Number(hipType) === 2
                  ? t("Normal")
                  : t("Curvier")}
              </LabelButton>
            </div>
          </>
        )}
        <div
          className="sizemeInformationsRow"
          onClick={() => setUpdatedPart(settingsUpdatedPartNames.AGE)}
        >
          {/* <p className="sizemeInformationsKey">{t('yourInformations12')}</p>
          <p className="sizemeInformationsValue">{age}</p> */}
          <LabelButton>{t("yourInformations12")}</LabelButton>
          <LabelButton bottomRight bold>
            {age}
          </LabelButton>
        </div>
        <div
          className="sizemeInformationsRow"
          onClick={() => setUpdatedPart(settingsUpdatedPartNames.FIT_CHOICE)}
        >
          {/* <p className="sizemeInformationsKey">{t('yourInformations13')}</p>
          <p className="sizemeInformationsValue">{fitChoice}</p> */}
          <LabelButton>{t("yourInformations13")}</LabelButton>
          <LabelButton bottomRight bold>
            {fitChoice === 0
              ? t("fitChoice1")
              : fitChoice === 50
              ? t("fitChoice3")
              : t("fitChoice5")}
          </LabelButton>
        </div>
      </div>

      {updatedPart && (
        <UpdateYourInformations
          updatedPart={updatedPart}
          setUpdatedPart={setUpdatedPart}
          heightRangeValue={heightRangeValue}
          setHeightRangeValue={setHeightRangeValue}
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
          setHipType={setHipType}
          chestType={chestType}
          setChestType={setChestType}
          gender={gender}
        />
      )}
    </div>
  );
};

export default YourInformations;
