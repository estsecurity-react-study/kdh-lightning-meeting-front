import Link from 'next/link';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import 'twin.macro';

import Button from '../../../atoms/Button';
import Input from '../../../atoms/Input';
import LabelCheckbox from '../../../molecules/LabelCheckbox';
import { BaseAuthForm } from '../type';

export const emailKey = 'savedEmail' as const;

export interface LoginInputs {
  email: string;
  password: string;
}

export type LoginFormProps = BaseAuthForm<LoginInputs>;

const LoginForm = ({ onSubmit, loading, error }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const defaultEmail = useMemo(
    () =>
      typeof window !== 'undefined' ? localStorage.getItem(emailKey) ?? '' : '',
    [],
  );

  return (
    <form
      onSubmit={onSubmit && handleSubmit(onSubmit)}
      tw="grid grid-cols-1 gap-y-5"
    >
      <div tw="flex flex-col gap-y-2">
        <Input
          defaultValue={defaultEmail}
          type="email"
          placeholder="이메일을 입력해주세요"
          autoComplete="off"
          {...register('email', {
            required: '필수 응답 항목입니다',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              message: '이메일 형식이 아닙니다.',
            },
          })}
        />
        {errors?.email && (
          <span tw="text-red-500 text-sm font-bold pl-2">
            {errors.email.message}
          </span>
        )}
      </div>

      <div tw="flex flex-col gap-y-2">
        <Input
          type="password"
          placeholder="패스워드를 입력해주세요"
          autoComplete="off"
          {...register('password', {
            required: '필수 응답 항목입니다',
            minLength: {
              value: 8,
              message: '비밀번호는 8자 이상이여야 합니다',
            },
            maxLength: {
              value: 24,
              message: '비밀번호는 24자 이하여야 합니다',
            },
          })}
        />
        {errors?.password && (
          <span tw="text-red-500 text-sm font-bold pl-2">
            {errors.password.message}
          </span>
        )}
      </div>

      {error && <span tw="text-red-500 text-sm font-bold pl-2">{error}</span>}
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
