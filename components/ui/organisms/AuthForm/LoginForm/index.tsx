import { useMemo } from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';
import 'twin.macro';

import Button from '../../../atoms/Button';
import Input from '../../../atoms/Input';
import LabelCheckbox from '../../../molecules/LabelCheckbox';
import { BaseAuthForm } from '../type';

export const emailKey = 'savedEmail' as const;

const LoginForm = ({ onSubmit, loading, error }: BaseAuthForm) => {
  const defaultEmail = useMemo(
    () =>
      typeof window !== 'undefined' ? localStorage.getItem(emailKey) ?? '' : '',
    [],
  );

  return (
    <form onSubmit={onSubmit} tw="w-[510px] grid grid-cols-1 gap-y-5">
      <Input
        defaultValue={defaultEmail}
        name="email"
        type="email"
        placeholder="이메일을 입력하세요"
        autoComplete="off"
      />
      <Input
        name="password"
        type="password"
        placeholder="패스워드를 입력하세요"
        autoComplete="off"
      />

      {error && <span tw="text-red-500">{error}</span>}
      <Button type="submit" disabled={loading}>
        로그인
      </Button>

      <a href="http://localhost:8000/api/auth/google/login">
        <GoogleLoginButton text="Google 로그인" />
      </a>

      <div tw="flex justify-between">
        <LabelCheckbox
          label="이메일 저장"
          id="isEmailSaveCheck"
          defaultChecked={!!defaultEmail}
        />
        <a href="#" tw="text-green-500 underline underline-offset-2">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
