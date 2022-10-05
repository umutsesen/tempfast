import React from 'react';
import AnimatedBorderInput from '../customElement/AnimatedBorderInput';
import Label from '../customElement/Label';

const Choice = ({ title, setValue, value, tabIndex, maxLength }) => {
  if (maxLength) {
    return (
      <div className="sizemeRange">
        {/* <button className="sizemeRangeName">
          {title} <div className="sizemeRangeNameVerticalLine"></div>
        </button> */}
        <Label>{title}</Label>

        <AnimatedBorderInput
          textCenter
          className="sizeandmeIntroductionInput"
          tabIndex={tabIndex}
          type="number"
          pattern={/^-?\d+\.?\d*$/}
          onChange={(e) => {
            if (e.target.value.length < 4) setValue(e.target.value);
          }}
          value={value}
        />

        {/* <div className="sizemeRangeInputWrapper">
          <input
            type="number"
            pattern="/^-?\d+\.?\d*$/"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <span className="sizemeRangeInputFocusBorder"></span>
        </div> */}
      </div>
    );
  }
  return (
    <div className="sizemeRange">
      {/* <button className="sizemeRangeName">
        {title} <div className="sizemeRangeNameVerticalLine"></div>
      </button> */}
      <Label>{title}</Label>

      <AnimatedBorderInput
        className="sizeandmeIntroductionInput"
        tabIndex={tabIndex}
        type="number"
        pattern={/^-?\d+\.?\d*$/}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />

      {/* <div className="sizemeRangeInputWrapper">
        <input
          type="number"
          pattern="/^-?\d+\.?\d*$/"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <span className="sizemeRangeInputFocusBorder"></span>
      </div> */}
    </div>
  );
};

export default Choice;
