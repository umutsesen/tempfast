import React, { useState, useEffect } from 'react';
import AnimatedBorderInput from '../customElement/AnimatedBorderInput';
import Button from '../customElement/Button';
import Label from '../customElement/Label';
import { loginInstance } from '../../axios';
import settingsStepNames from '../../constants/settingsStepNames';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import Input from '../customElement/Input';

const Login = ({ setSettingsStep, setIsLoggedIn, setUserInfos }) => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { setAuth } = useAuth();

  useEffect(() => {
   /*  const script = document.createElement('script');
    script.src =
      'https://customerssizeandme.s3.eu-central-1.amazonaws.com/stripe.js';

    script.async = true;

    document.body.appendChild(script); */
  }, []);

  useEffect(() => {
    if (email && password) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [email, password]);

  return (
    <>
      <div className="step login">
        <div className="sizemeLoginContainer">
          <div className="sizeAndMeLoginContainer__inputs sizeAndMeLoginContainer__inputs--email">
            <Input
              type={'email'}
              className="sizemeLoginInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={'Email'}
            />
          </div>
          <div className="sizeAndMeLoginContainer__inputs">
            <Input
              type={'password'}
              className="sizemeLoginInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t('login1')}
            />
          </div>

          <div
            className="sizeAndMeLoginContainer__bottom"
            style={{ marginTop: '10px' }}
          >
            <Button
              type="secondary"
              onClick={() => setSettingsStep(settingsStepNames.FORGOT_PASSWORD)}
            >
              {t('login4')}
            </Button>

            <Button
              className="sizemeLoginButton"
              type="black"
              disabled={buttonDisabled}
              onClick={async () => {
                try {
                  const loginResponse = await loginInstance.post(
                    '/auth/login',
                    {
                      email,
                      password
                    }
                  );
                  console.log(loginResponse.data, 'F1F');
                  // verificationToken
                  setAuth({
                    /* user: loginResponse.data.user,  */ accessToken:
                      loginResponse.data.token
                  });
                  setIsLoggedIn({
                    token: loginResponse.data.token,
                    verified: loginResponse.data.user.verified,
                    expireDate: undefined,
                    loggedIn: true
                  });

                  const userKey = loginResponse.data.user.userKey;

                  await localStorage.setItem('SizeAndMeUserKey', userKey);

                  /*  console.log(loginResponse);

                  setIsLoggedIn({
                    loggedIn: loginResponse.data.isLoggedIn,
                    verified: loginResponse.data.verified,
                    expireDate: loginResponse.data.expireDate
                  }); */
                  console.log(loginResponse.data.user);
                  setUserInfos({
                    name: loginResponse.data?.user.name,
                    surname: loginResponse.data?.user.surname,
                    avatar: loginResponse.data?.user.avatar,
                    phone: loginResponse.data?.user.phone,
                    email: loginResponse.data?.user.email
                  });

                  setSettingsStep(settingsStepNames.MANAGE_USERS);
                } catch (err) {
                  //
                  console.log(err.response.data.error);
                  toast.error(t(err.response.data.error), { duration: 4000 });
                }
              }}
            >
              {t('login2')}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
