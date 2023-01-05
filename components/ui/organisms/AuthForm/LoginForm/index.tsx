import Link from 'next/link';
import { useMemo } from 'react';
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
    <form onSubmit={onSubmit} tw="grid grid-cols-1 gap-y-5">
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

      <div tw="flex justify-between items-center">
        <LabelCheckbox
          label="이메일 저장"
          id="isEmailSaveCheck"
          defaultChecked={!!defaultEmail}
        />
        <Link href="#" tw="text-green-500 underline underline-offset-2">
          비밀번호를 잊으셨나요?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
