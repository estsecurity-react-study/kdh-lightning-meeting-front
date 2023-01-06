import { isAxiosError } from 'axios';
import { useState } from 'react';

import AuthTemplate from '../../components/templates/AuthTemplate';
import {
  emailKey,
  LoginInputs,
} from '../../components/ui/organisms/AuthForm/LoginForm';
import axiosInstance from '../../libs/axiosInstance';

const SignInPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<LoginInputs | string | null>(null);
  return (
    <AuthTemplate
      type="login"
      loading={loading}
      error={error}
      onSubmit={(data) => {
        setLoading(true);
        axiosInstance
          .post('/auth/login', data)
          .then((res) => {
            localStorage.setItem(emailKey, data.email);
            setError(null);
            console.log(res);
          })
          .catch((error) => {
            if (isAxiosError(error)) {
              return setError(error?.response?.data.errors);
            }
            setError('알 수 없는 에러가 발생했습니다');
          })
          .finally(() => setLoading(false));
      }}
    />
  );
};

export default SignInPage;
