import React, { useEffect, useState } from "react";
import IconUserCircle from "../svg/icon_user_circle";
import IconCloseCircleFilled from "../svg/icon_close_circle_filled";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../customElement/Button";
import { userInstance } from "../../axios";
import { useTranslation } from "react-i18next";
import LabelButton from "../customElement/LabelButton";
import IconAvatarFilled from "../svg/icon_avatar_filled";

SwiperCore.use([Navigation, A11y]);

const UserCard = ({ userInformations, switchUser, deleteWidgetUser }) => {
  const { t, i18n } = useTranslation();
  const sex = () => {
    if (userInformations?.activeSizeModel?.sex === "Kadin")
      return t("manageUsers4");
    else if (userInformations?.activeSizeModel?.sex === "Erkek")
      return t("manageUsers3");

    return userInformations?.activeSizeModel?.sex;
  };

  const height = () => {
    if (userInformations?.activeSizeModel?.height === undefined) return;

    return `${userInformations?.activeSizeModel?.height} cm`;
  };

  return (
    <div>
      {!userInformations.isActiveUser && (
        <IconCloseCircleFilled
          className={"sizemeCardCloseIcon"}
          onClick={() => deleteWidgetUser(userInformations)}
        />
      )}{" "}
      <div className="sizemeUserCard" onClick={() => switchUser()}>
        <div className="sizemeUserCardTop">
          <p
            className={`sizeandmeUserStatus ${
              userInformations.isActiveUser ? "sizeandmeUserStatus-active" : ""
            }`}
          >
            {userInformations.isActiveUser
              ? t("manageUsers6")
              : t("manageUsers5")}
          </p>

          <div className="sizemeUserCardTopSquare">
            <IconAvatarFilled height={70} width={70} />
          </div>
        </div>
        <div className="sizemeUserCardBottom">
          <LabelButton style={{ fontSize: "12px", lineHeight: "12px" }}>
            {sex()}
          </LabelButton>
          <LabelButton style={{ fontSize: "12px", lineHeight: "12px" }}>
            {height()}
          </LabelButton>
        </div>
      </div>
    </div>
  );
};

const ManageUsers = ({
  setStep,
  gender,
  setGender,
  setHeightRangeValue,
  setWeightRangeValue,
  setFitChoice,
  setAge,
  setShoulderType,
  setStomachType,
  setHipType,
  setChestType,
  setSettingsStep,
  data,
  setData,
  setUserHasBeforeInformation,
  bodyPart
}) => {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight
    });
  };

  console.log();

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);

  const deleteWidgetUser = async (userInformations) => {
    console.log(userInformations);
    try {
      await userInstance.post("data/deleteWidgetUserProfile", {
        userProfileId: userInformations._id,
        userKey: userInformations.key
      });

      setData(data.filter((item) => item._id !== userInformations._id));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const userKey = await localStorage.getItem("SizeAndMeUserKey");
      const response = await userInstance.get(
        `/data/getWidgetsUserProfiles/${userKey}`
      );
      console.log(response, userKey);
      let dataArray = [...response.data];
      const activeUserIndex = dataArray.findIndex((item) => item.isActiveUser);
      const activeUser = dataArray[activeUserIndex];
      dataArray.splice(activeUserIndex, 1);
      dataArray = [activeUser, ...dataArray];
      console.log(dataArray);
      setData(dataArray);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="step sizemeManageUsers">
      {loading ? (
        <img
          src="https://sizemeecommerce.s3.eu-west-3.amazonaws.com/animation_300_kuseozyq.gif"
          alt="loading"
        />
      ) : (
        <>
          <div className="sizemeManageUsersTitle">
            <h3>{t("manageUsers1")}</h3>
            <p style={{ fontWeight: 500 }}>{t("manageUsers2")} </p>
          </div>
          {/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ) || data.length > 3 ? (
            <Swiper
              centeredSlides={true}
              centeredSlidesBounds={true}
              className="sizemeManageUsersUserCard"
              spaceBetween={10}
              slidesPerView={windowDimenion.winWidth <= 600 ? 1 : 3}
              navigation
            >
              {data.map((item, idx) => (
                <SwiperSlide key={item._id} className="swiper-center">
                  <UserCard
                    userInformations={item}
                    deleteWidgetUser={deleteWidgetUser}
                    switchUser={async () => {
                      try {
                        await userInstance.post("data/switchUserProfile", {
                          userProfileId: item._id,
                          userKey: item.key
                        });
                        console.log(item);
                        let sizeModel = item?.activeSizeModel;
                        console.log(sizeModel);
                        if (sizeModel === undefined) {
                          /*   setGender(null); */
                          setHeightRangeValue(165);
                          setWeightRangeValue(60);
                          setFitChoice(50);
                          setAge(18);
                          setShoulderType(null);
                          setStomachType(null);
                          setHipType(null);
                          setChestType(null);
                          setSettingsStep(null);
                          setStep(0);
                          return;
                        }
                        if (bodyPart === "upper" && item?.upper) {
                          sizeModel = item?.upper;
                        }
                        if (bodyPart === "lower" && item?.lower) {
                          sizeModel = item?.lower;
                        }
                        if (sizeModel.bodyPart !== bodyPart) {
                          /* setGender(null); */
                          setHeightRangeValue(165);
                          setWeightRangeValue(60);
                          setFitChoice(50);
                          setAge(18);
                          setShoulderType(null);
                          setStomachType(null);
                          setHipType(null);
                          setChestType(null);
                          setSettingsStep(null);
                          setStep(0);
                          return;
                        }
                        setGender(sizeModel.sex === "Kadin" ? "woman" : "man");
                        setHeightRangeValue(sizeModel.height);
                        setWeightRangeValue(sizeModel.weight);
                        setFitChoice(sizeModel.fitChoice);
                        setAge(sizeModel.age);
                        setShoulderType(
                          sizeModel.sex === "Kadin"
                            ? null
                            : sizeModel?.shoulderType
                        );
                        setStomachType(sizeModel?.waistType);
                        setHipType(sizeModel?.hipType);
                        setChestType(
                          sizeModel.sex === "Erkek"
                            ? null
                            : sizeModel?.shoulderType
                        );
                        setSettingsStep(null);
                        setUserHasBeforeInformation(true);
                        setStep(4);
                      } catch (err) {
                        alert(err);
                      }
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Swiper
              centeredSlides={true}
              centeredSlidesBounds={true}
              className="sizemeManageUsersUserCard"
              spaceBetween={10}
              slidesPerView={windowDimenion.winWidth <= 600 ? 1 : 3}
            >
              {data.map((item, idx) => (
                <SwiperSlide key={item._id} className="swiper-center">
                  <UserCard
                    userInformations={item}
                    deleteWidgetUser={deleteWidgetUser}
                    switchUser={async () => {
                      try {
                        await userInstance.post("data/switchUserProfile", {
                          userProfileId: item._id,
                          userKey: item.key
                        });
                        console.log(item);
                        let sizeModel = item?.activeSizeModel;
                        console.log(sizeModel);
                        if (sizeModel === undefined) {
                          /*   setGender(null); */
                          setHeightRangeValue(165);
                          setWeightRangeValue(60);
                          setFitChoice(50);
                          setAge(18);
                          setShoulderType(null);
                          setStomachType(null);
                          setHipType(null);
                          setChestType(null);
                          setSettingsStep(null);
                          setStep(0);
                          return;
                        }
                        if (bodyPart === "upper" && item?.upper) {
                          sizeModel = item?.upper;
                        }
                        if (bodyPart === "lower" && item?.lower) {
                          sizeModel = item?.lower;
                        }
                        if (sizeModel.bodyPart !== bodyPart) {
                          /* setGender(null); */
                          setHeightRangeValue(165);
                          setWeightRangeValue(60);
                          setFitChoice(50);
                          setAge(18);
                          setShoulderType(null);
                          setStomachType(null);
                          setHipType(null);
                          setChestType(null);
                          setSettingsStep(null);
                          setStep(0);
                          return;
                        }
                        setGender(sizeModel.sex === "Kadin" ? "woman" : "man");
                        setHeightRangeValue(sizeModel.height);
                        setWeightRangeValue(sizeModel.weight);
                        setFitChoice(sizeModel.fitChoice);
                        setAge(sizeModel.age);
                        setShoulderType(
                          sizeModel.sex === "Kadin"
                            ? null
                            : sizeModel?.shoulderType
                        );
                        setStomachType(sizeModel?.waistType);
                        setHipType(sizeModel?.hipType);
                        setChestType(
                          sizeModel.sex === "Erkek"
                            ? null
                            : sizeModel?.shoulderType
                        );
                        setSettingsStep(null);
                        setStep(4);
                      } catch (err) {
                        alert(err);
                      }
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {/* <Button
            onClick={async () => {
              try {
                await userInstance.post('/data/createUserProfile', {
                  userKey: data[0].key,
                  userId: data[0].user
                });
                setGender(null);
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
          </Button> */}
        </>
      )}
    </div>
  );
};

export default ManageUsers;
