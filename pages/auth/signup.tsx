import { isAxiosError } from 'axios';
import { useState } from 'react';

import AuthTemplate from '../../components/templates/AuthTemplate';
import { RegisterInputs } from '../../components/ui/organisms/AuthForm/RegisterForm';
import axiosInstance from '../../libs/axiosInstance';

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<RegisterInputs | string | null>(null);
  return (
    <AuthTemplate
      type="register"
      loading={loading}
      error={error}
      onSubmit={(data) => {
        setLoading(true);
        axiosInstance
          .post('/auth/register', data)
          .then((res) => {
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

export default SignUpPage;
