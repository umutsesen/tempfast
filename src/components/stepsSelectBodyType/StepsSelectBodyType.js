import React from 'react';
import SelectBodyTypeSlider from '../selectBodyTypeSlider/SelectBodyTypeSlider';
import { useTranslation } from 'react-i18next';

const StepSelectBodyType = ({ bodyTypes, typeBody, setTypeBody }) => {
  const { t, i18n } = useTranslation();
  console.log(typeBody, bodyTypes);
  return (
    <>
      <div className="selectBodyTypes">
        {bodyTypes.types.map((type) => (
          <div className="selectType" key={type.value}>
            <label>
              <input
                type="radio"
                name={bodyTypes.name}
                value={type.value}
                className={`bodyShape`}
                onChange={(e) => setTypeBody(e.target.value)}
                checked={typeBody == type.value}
              />
              <img src={type.imageSource} alt="bodyType" className={` ${typeBody == type.value ? 'opacityHigh' : null} ${typeBody === null ? null : typeBody === type.value ? "opacityHigh" : 'opacitylow'}`} />
            </label>
            <p>{t(type.name)}</p>
          </div>
        ))}
      </div>
      <div className="selectBodyTypes-mobil">
        <SelectBodyTypeSlider
          bodyTypes={bodyTypes}
          setBodyTypeValue={setTypeBody}
          activeIndex={typeBody}
        />
        <p>{t(typeBody && bodyTypes.types[typeBody - 1].name)}</p>
      </div>
    </>
  );
};

export default StepSelectBodyType;
