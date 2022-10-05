import React from 'react';
import Slider from 'rc-slider';
import { useTranslation } from 'react-i18next';
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider);

const FitChoiceSlider = ({ fitChoice, setFitChoice }) => {
  const { t, i18n } = useTranslation();
  return (
    <Slider
      min={0}
      max={100}
      value={fitChoice}
      startPoint={50}
      // dotStyle={{ height: 7, width: 4, marginTop: 10 }}
      activeDotStyle={{
        background: '#4A4A4A',
        borderColor: '#4A4A4A',
        borderRadius: '0'
      }}
      dotStyle={{
        borderRadius: '0',
        borderColor: '#7B7C7C',
        background: '#7B7C7C'
      }}
      railStyle={{ background: 'rgba(0,0,0,0.5)', height: '1px' }}
      trackStyle={{ background: 'rgba(0,0,0,0.5)', height: '1px' }}
      handleStyle={{
        marginTop: -10,
        height: 20,
        width: 20,
        background: '#4A4A4A',
        borderColor: '#4A4A4A',
        borderRadius: '0'
      }}
      step={1}
      marks={{
        0: t('fitChoice1'),
       /*  25: t('fitChoice2'), */
        50: t('fitChoice3'),
      /*   75: t('fitChoice4'), */
        100: t('fitChoice5')
      }}
      onChange={(value) => setFitChoice(value)}
      onAfterChange={(value) => {
        if (value < 12) {
          setFitChoice(0);
        } /* else if ((value > 12 && value <= 25) || value < 37) {
          setFitChoice(25);
        }  */else if ((value > 12 && value <= 50) || value < 62) {
          setFitChoice(50);
        } /* else if ((value > 61 && value <= 75) || value < 87) {
          setFitChoice(75);
        }  */else if (value > 62 && value <= 100) {
          setFitChoice(100);
        }
      }}
      //   tipFormatter={(value) => {
      //     return value;
      //   }}
    />
  );
};

export default FitChoiceSlider;
