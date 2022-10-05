import React, { useState, useEffect } from "react";
import { userInstance, loginInstance } from "../../axios";
import Label from "../customElement/Label";
import AnimatedBorderInput from "../customElement/AnimatedBorderInput";
import Button from "../customElement/Button";
import settingsStepNames from "../../constants/settingsStepNames";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import SocialMedia from "../socialMedia/SocialMedia";
import Input from "../customElement/Input";

const BodySizeInformation = ({
  gender,
  heightRangeValue,
  weightRangeValue,
  fitChoice,
  age,
  shoulderType,
  stomachType,
  hipType,
  chestType,
  bodyPart,
  loading,
  setLoading,
  isLoggedIn,
  setIsLoggedIn,
  setSettingStep,
  setUserInfos,
  userInfos,
  userHasBeforeInformation
}) => {
  const [data, setData] = useState({});
  const [email, setEmail] = useState("");
  const [registerButtonDisabled, setRegisterButtonDisabled] = useState(true);
  const { t, i18n } = useTranslation();
  console.log("Helloooo worrllll");

  const checkDataforBsl = (sizeData) => {
    if (sizeData.beden === "Unfortunately") {
      return {
        success: false,
        info: t("final3")
      };
    } else {
      if (sizeData.beden !== "XXL" && sizeData.beden !== "XXS") {
        return {
          success: true,
          info: `${t("final4")} ${sizeData.beden}`
        };
      } /* else {
        if (sizeData.beden === 'XXL') {
          return {
            success: true,
            info: `${t('final4')} ${sizeData.beden}`,
            status: t('final5'),
            size: sizeData.beden
          };
        } else {
          return {
            success: true,
            info: `${t('final4')} ${sizeData.beden}`,
            status: t('final5'),
            size: sizeData.beden
          };
        }
      } */
    }
  };

  useEffect(() => {
    if (email) setRegisterButtonDisabled(false);
    else setRegisterButtonDisabled(true);
  }, [email]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        console.log(fitChoice, "123123123");
        let fitFinal = fitChoice === 0 ? "-1" : fitChoice === 50 ? "0" : "1";
        if (!userHasBeforeInformation) fitFinal = fitChoice;

        if (bodyPart === "upper") {
          const productCode = document
            .getElementById("sizeandmeproductCode")
            .innerText.replaceAll(" ", "")
            .replaceAll("\n", "");
          const response = await fetch(
            `https://clients.sizeandme.com/touche/generatetouche?sex=Kadin&boy=${Number(
              heightRangeValue
            )}&kilo=${Number(
              weightRangeValue
            )}&productCode=${productCode}&fitChoice=${fitFinal}&shoulderType=${Number(
              shoulderType
            )}&waistType=${Number(stomachType)}&hipType=-1`
          );
          console.log(
            `https://clients.sizeandme.com/touche/generatetouche?sex=Kadin&boy=${Number(
              heightRangeValue
            )}&kilo=${Number(
              weightRangeValue
            )}&productCode=${productCode}&fitChoice=${fitFinal}&shoulderType=${Number(
              shoulderType
            )}&waistType=${Number(stomachType)}&hipType=-1`
          );

          const sizeData = await response.json();
          console.log(sizeData);
          setData(checkDataforBsl(sizeData));
          const userKey = await localStorage.getItem("SizeAndMeUserKey");
          const url = window.location.href;
          const store = "test";
          const productTitle = "Elbise";
          const productGroup = "bustiyer";
          const productPhoto =
            "https://img-lcwaikiki.mncdn.com/mnresize/1024/-/pim/productimages/20221/5680995/v1/l_20221-s2bq11z8-lqy_u.jpg";
          const steps = {
            weight: Number(weightRangeValue),
            height: Number(heightRangeValue),
            sex: gender === "man" ? "Erkek" : "Kadin",
            waistType: Number(stomachType),
            shoulderType:
              gender === "man" ? Number(shoulderType) : Number(chestType),
            result: sizeData.beden,
            fitChoice: 0,
            age
          };
          const response2 = await userInstance.post(
            "data/saveWidgetStoreUser",
            {
              userKey,
              productGroup,
              url,
              bodyPart,
              steps,
              store,
              productPhoto,
              productTitle,
              language: i18n.language
            }
          );
        } else if (bodyPart === "lower") {
          const productCode = document
            .getElementById("sizeandmeproductCode")
            .innerText.replaceAll(" ", "")
            .replaceAll("\n", "");
          const response = await fetch(
            `https://clients.sizeandme.com/touche/generatetouche?sex=Kadin&boy=${Number(
              heightRangeValue
            )}&kilo=${Number(
              weightRangeValue
            )}&productCode=${productCode}&fitChoice=${fitFinal}&shoulderType=-1&waistType=${Number(
              stomachType
            )}&hipType=${Number(hipType)}`
          );

          const sizeData = await response.json();
          setData(checkDataforBsl(sizeData));
          const result = sizeData.beden;
          const userKey = await localStorage.getItem("SizeAndMeUserKey");
          const url = window.location.href;
          const store = "test";
          const productTitle = "Elbise";
          const productGroup = "bustiyer";
          const productPhoto =
            "https://img-lcwaikiki.mncdn.com/mnresize/1024/-/pim/productimages/20221/5680995/v1/l_20221-s2bq11z8-lqy_u.jpg";
          const steps = {
            weight: Number(weightRangeValue),
            height: Number(heightRangeValue),
            sex: gender === "man" ? "Erkek" : "Kadin",
            waistType: Number(stomachType),
            hipType: Number(hipType),
            result: sizeData.beden,
            fitChoice: 0,
            age
          };
          const response2 = await userInstance.post(
            "data/saveWidgetStoreUser",
            {
              userKey,
              productGroup,
              url,
              bodyPart,
              steps,
              store,
              productPhoto,
              productTitle,
              language: i18n.language
            }
          );
        }
      } catch (err) {
        alert(err);
      }
      setLoading(false);
    })();
  }, []);

  const dummyImage = document.getElementById("sizeandmeproductimg").href;

  return (
    <>
      <div className="step sizemeBodySizeInformation">
        {loading ? (
          <img
            src="https://sizemeecommerce.s3.eu-west-3.amazonaws.com/animation_300_kuseozyq.gif"
            className="sizeandmeFinalLoading"
          />
        ) : data /*  && data.success */ ? (
          <>
            <div className="lastPageImage__wrapper">
              <img
                src={dummyImage}
                className="sizemeBodySizeProduct"
                alt="productImage"
                id="sizeandmeProductImg2"
              />
            </div>

            <div className="sizemeBodySizeInformationProposal">
              <h3 className="finalPart__text">{data.info}</h3>
              {data?.status ? data.status : <SocialMedia />}
              {/*  {!isLoggedIn.loggedIn && (
                <div className="sizemeRegisterRow">
                  <p className="sizemeRegisterRowTextField">
                    {t('finalDescription')}
                  </p>
                  <div className="sizemeRegisterTextField">
                    <Input
                      placeholder="E-mail"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button
                      type="black"
                      className="registerButton"
                      onClick={async () => {
                        try {
                          const userKey = await localStorage.getItem(
                            'SizeAndMeUserKey'
                          );
                          const singUpResponse = await loginInstance.post(
                            '/auth/signup',
                            { userKey, email }
                          );

                          toast.success(
                            t(singUpResponse.data.message, {
                              parameter: singUpResponse.data.parameter
                            }),
                            { duration: 4000 }
                          );

                          const createdDate = new Date();
                          const expireDate = new Date(
                            createdDate.getTime() + 60 * 60 * 24 * 1000
                          );

                          setIsLoggedIn({
                            token: singUpResponse.data.token,
                            loggedIn: true,
                            verified: false,
                            expireDate: expireDate.toLocaleString('tr-TR')
                          });
                          setUserInfos({ ...userInfos, email: email });

                          setSettingStep(settingsStepNames.MANAGE_USERS);
                        } catch (err) {
                          toast.error(t(err.response.data.error), {
                            duration: 4000
                          });
                        }
                      }}
                      disabled={registerButtonDisabled}
                    >
                      {t('final2')}
                    </Button>
                  </div>
                </div>
              )} */}
            </div>
          </>
        ) : (
          <>
            {/*  TODO: sonra bakılacak */}
            {/* <img src={dummyImage} />
          <h4>{data.info}</h4> */}
          </>
        )}
      </div>
    </>
  );
};

export default BodySizeInformation;
