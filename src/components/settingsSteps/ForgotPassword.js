import React, { useState } from 'react';
import AnimatedBorderInput from '../customElement/AnimatedBorderInput';
import Button from '../customElement/Button';
import Label from '../customElement/Label';
import { loginInstance } from '../../axios';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import Input from '../customElement/Input';

const ForgotPassword = () => {
  const { t, i18n } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [email, setEmail] = useState('');

  const onClick = async () => {
    try {
      setDisabled(true);
      const response = await loginInstance.post('/auth/forgotPassword', {
        email
      });

      setTimeout(() => {
        setDisabled(false);
      }, 3000);
      console.log(response, '3');
      toast.success(
        t(response.data.message, {
          parameter: response.data.parameter
        }),
        { duration: 4000 }
      );
    } catch (err) {
      toast.error(t(err.response.data.error), { duration: 4000 });
    }
  };
  return (
    <div className="step forgotPassword">
      <h3 className="stepTitle">{t('forgotPassword1')}</h3>
      <div className="sizeandmeForgotPasswordInputContainer">
        <Input
          placeholder={'Email'}
          className="sizeandmeForgotPasswordInput"
          type={'email'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Button disabled={disabled} onClick={onClick} type="black">
        {t('forgotPassword2')}
      </Button>
    </div>
  );
};

export default ForgotPassword;
